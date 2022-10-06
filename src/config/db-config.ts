import { DbConfig } from './interfaces/db-config.interface';

export default (): DbConfig => ({
  type: process.env.TYPE_DB,
  host: process.env.HOST_DB,
  port: parseInt(process.env.PORT_DB, 10) || 3306,
  username: process.env.USERNAME_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.DB_NAME,
});
