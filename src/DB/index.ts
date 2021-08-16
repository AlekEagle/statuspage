import { Sequelize } from 'sequelize';
import dotenvConfig from '../dotenv';

let __sequelize: Sequelize;

export const sequelize = __sequelize;

export async function init() {
  await dotenvConfig();
  if (!__sequelize) {
    __sequelize = new Sequelize(
      process.env.DB,
      process.env.DBUSERNAME,
      process.env.DBPASSWORD,
      {
        host: 'localhost',
        dialect: 'postgres',
        logging: false
      }
    );
    await testConnection();
    return true;
  }
  return false;
}

export async function testConnection() {
  try {
    await __sequelize.authenticate();
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export default {
  init,
  sequelize: __sequelize,
  testConnection
};
