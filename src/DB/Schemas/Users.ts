import { sequelize, init as initDB } from '..';
import { Model, DataTypes } from 'sequelize';

initDB();

export default class Users extends Model {}

Users.init(
  {
    id: { type: DataTypes.STRING, primaryKey: true },
    name: DataTypes.STRING(32),
    permissions: DataTypes.SMALLINT,
    avatarURL: DataTypes.STRING(128),
    bannedAt: DataTypes.DATE
  },
  {
    sequelize,
    deletedAt: true
  }
);
