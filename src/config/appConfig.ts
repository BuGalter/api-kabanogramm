import IAppConfig from './interfaces/appConfig';

export default (): IAppConfig => ({
  port: parseInt(process.env.PORT, 10) || 3000,
});
