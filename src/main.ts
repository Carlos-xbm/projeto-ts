import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
    // OUTRA OPÇAO
    /* 
    const app = await NestFactory.create(AppModule, {
        cors: true,
    }); 
    */

    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    app.enableCors();

    app.set('trust proxy', 1);

    app.useGlobalPipes(new ValidationPipe());

    //Swagger
    const config = new DocumentBuilder()
        .setTitle('PizzaFresh')
        .setDescription('Aplicação para gestão de mesas de uma pizzaria')
        .setVersion('1.0.0')
        .addTag('status')
        .addTag('auth')
        .addTag('table')
        .addTag('product')
        .addTag('user')
        .addTag('order')
        .addBearerAuth()
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    await app.listen(process.env.PORT || 3333);

    // console.log('http://localhost:3333/api');
}
bootstrap();
