import { sequelize, init as initDB } from '.';
import { Model, DataTypes } from 'sequelize';

initDB();

export enum IncidentStatus {
  //Realtime Incidents
  Investigating, // Have knowledge that something is going on, locating root cause.
  Identified, // Identified root cause, beginning to work on fixes.
  Monitoring, // Fixes have been deployed, confirming that aforementioned fix resolves issue.
  Resolved, // Issue has been successfully resolved.
  //Scheduled Incidents
  Scheduled, // Scheduled to occur at a later date.
  InProgress, // Scheduled event in progress.
  Verifying, // Verifying integrity.
  Completed // Scheduled event completed successfully.
}

export enum IncidentSeverity {
  None, // No impact.
  Maintenance, // No expected impact, may not be guaranteed.
  Minor, // May cause some slowdowns, and/or cause a few features to fail.
  Major, // Most likely will cause slowdowns, and several features are inoperable.
  Critical // Effectively offline, or completely unusable.
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
  createdAt!: Date;
  updatedAt!: Date;
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
