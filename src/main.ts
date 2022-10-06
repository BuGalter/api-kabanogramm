import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import appConfig from './config/app-config';
import swaggerConfig from './config/swagger-config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));
  app.setGlobalPrefix(appConfig().globalPrefix);

  const options = new DocumentBuilder()
    .setTitle(swaggerConfig().title)
    .setDescription(swaggerConfig().description)
    .setVersion(swaggerConfig().version)
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(appConfig().port);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
