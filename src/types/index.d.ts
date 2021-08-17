import { Model } from 'sequelize/types';

declare namespace NodeJS {
  export interface ProcessEnv {
    DB: string;
    DBUSERNAME: string;
    DBPASSWORD: string;
  }
}
