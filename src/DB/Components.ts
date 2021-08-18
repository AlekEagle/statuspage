import { sequelize, init as initDB } from '.';
import { Model, DataTypes } from 'sequelize';

initDB();

export enum ComponentStatus {
  Operational,
  UnderMaintenance,
  DegradedPerformance,
  PartialOutage,
  MajorOutage
}

export default class Components extends Model {
  id!: string; // The ID of the component.
  groupId!: string | null; // The ID of the group the component belongs to, null if there is no group.
  name!: string; // The name of the component.
  description!: string; // The description of the component.
  createdAt!: Date; // Date the component was created at.
  updatedAt!: Date; // Date the component was last updated at.
  status!: ComponentStatus; // The current status of the component.
}

Components.init(
  {
    id: { type: DataTypes.STRING(12), primaryKey: true },
    groupId: DataTypes.INTEGER,
    name: DataTypes.STRING(32),
    description: DataTypes.STRING(256),
    status: DataTypes.SMALLINT
  },
  {
    sequelize
  }
);
