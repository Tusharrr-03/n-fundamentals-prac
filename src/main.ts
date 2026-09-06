import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  //. Setting up the global prefix for all routes
  // app.setGlobalPrefix('api');

  //. Setting up the global validation pipe for request validation
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,          // strip properties not in the DTO
    forbidNonWhitelisted: true, // throw error if extra properties are sent
    transform: true,
  },),)
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
