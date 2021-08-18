import { sequelize, init as initDB } from '.';
import { Model, DataTypes } from 'sequelize';

initDB();

export enum IncidentStatus {
  //Realtime Incidents
  Investigating = 1 << 0, // Have knowledge that something is going on, locating root cause.
  Identified = 1 << 1, // Identified root cause, beginning to work on fixes.
  Monitoring = 1 << 2, // Fixes have been deployed, confirming that aforementioned fix resolves issue.
  Resolved = 1 << 3, // Issue has been successfully resolved.
  //Scheduled Incidents
  Scheduled = 1 << 4, // Scheduled to occur at a later date.
  InProgress = 1 << 5, // Scheduled event in progress.
  Verifying = 1 << 6, // Verifying integrity.
  Completed = 1 << 7 // Scheduled event completed successfully.
}

export enum IncidentSeverity {
  None = 1 << 0, // No impact.
  Maintenance = 1 << 1, // No expected impact, may not be guaranteed.
  Minor = 1 << 2, // May cause some slowdowns, and/or cause a few features to fail.
  Major = 1 << 3, // Most likely will cause slowdowns, and several features are inoperable.
  Critical = 1 << 4 // Effectively offline, or completely unusable.
}

export default class Incidents extends Model {
  id!: string;
  severity!: IncidentSeverity;
  status!: IncidentStatus;
  schedule!: {
    scheduledFor: string;
    scheduledUntil: string;
    autoCompleted: boolean;
    autoInProgress: boolean;
  };
  updates: string[];
  notify!: boolean;
  affects!: string[];
}

Incidents.init(
  {
    id: { type: DataTypes.STRING(12), primaryKey: true },
    title: DataTypes.STRING,
    severity: DataTypes.SMALLINT,
    status: DataTypes.SMALLINT,
    schedule: DataTypes.JSON,
    updates: DataTypes.ARRAY(DataTypes.STRING(12)),
    notify: DataTypes.BOOLEAN,
    affects: DataTypes.ARRAY(DataTypes.STRING(12))
  },
  {
    sequelize
  }
);
