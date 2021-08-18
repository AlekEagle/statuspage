import { sequelize, init as initDB } from '.';
import { Model, DataTypes } from 'sequelize';
import { IncidentStatus, IncidentSeverity } from './Incidents';

initDB();

export default class IncidentUpdate extends Model {
  id!: string;
  incidentID!: string;
  components!: [
    {

    }
  ]
}