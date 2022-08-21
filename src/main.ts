import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from "@nestjs/common";
import {GetConfig} from "./config/config";

const cors = require('cors');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = GetConfig()
  app.use(cors())
  await app.listen(config.env.appPort);
  app.useGlobalPipes(new ValidationPipe())
}
bootstrap();
