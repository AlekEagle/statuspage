import { sequelize, init as initDB } from '.';
import { Model, DataTypes } from 'sequelize';
import { IncidentStatus } from './Incidents';
import { ComponentStatus } from './Components';

initDB();

export default class IncidentUpdate extends Model {
  id!: string;
  incidentID!: string;
  components!: [
    {
      id: string;
      status: ComponentStatus;
    }
  ];
  body!: string;
  status: IncidentStatus;
  notify: boolean;
}
