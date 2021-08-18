import { sequelize, init as initDB } from '.';
import { Model, DataTypes } from 'sequelize';

initDB();



export default class Components extends Model {
  id!: string;
};
