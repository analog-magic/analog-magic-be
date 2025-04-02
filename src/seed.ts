import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { MongooseModule, getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';

async function bootstrap() {
  const logger = new Logger('Seed');
  logger.log('Starting seeding...');

  const app = await NestFactory.createApplicationContext(AppModule);

  try {
    // Get your models from the app context
    // Example for a Course model (adjust based on your actual models)
    const courseModel = app.get(getModelToken('Course'));

    // Clear existing data
    await courseModel.deleteMany({});

    // Insert new data
    await courseModel.insertMany([
      {
        title: 'Advanced Film Photography',
        description: 'Take your analog photography skills to the next level',
        teacher: 'Alex Johnson',
        capacity: 15,
        price: 199.99,
        starRating: '4.8',
        category: 'live',
        createdAt: new Date(),
      },
      {
        title: 'Vintage Camera Restoration',
        description: 'Learn how to restore and use vintage cameras',
        teacher: 'Maria Garcia',
        capacity: 10,
        price: 149.99,
        starRating: '4.5',
        category: 'live',
        createdAt: new Date(),
      },
    ]);

    logger.log('Seeding completed successfully!');
  } catch (error) {
    logger.error('Seeding failed!');
    logger.error(error);
  } finally {
    await app.close();
  }
}

bootstrap();
