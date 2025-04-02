import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Course, CourseSchema } from './entities/course.entity';
import { CourseService } from './courses.service';
import { CoursesResolver } from './courses.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Course.name, schema: CourseSchema }]),
  ],
  providers: [CourseService, CoursesResolver],
  exports: [CourseService],
})
export class CoursesModule {}
