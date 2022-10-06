import { AppConfig } from './interfaces/app-config.interface';

export default (): AppConfig => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  globalPrefix: 'api/v1',
});
