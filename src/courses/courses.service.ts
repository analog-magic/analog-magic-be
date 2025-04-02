import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course } from './entities/course.entity';

@Injectable()
export class CourseService {
  constructor(@InjectModel(Course.name) private courseModel: Model<Course>) {}

  async findAll(): Promise<Course[]> {
    return this.courseModel.find().exec();
  }

  async findOne(id: string): Promise<Course> {
    return this.courseModel.findById(id).exec();
  }
}
