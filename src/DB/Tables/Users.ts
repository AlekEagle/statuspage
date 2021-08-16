import { sequelize, init as dbInit } from '..';
import { Model, Op, DataTypes } from 'sequelize';

dbInit();

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
