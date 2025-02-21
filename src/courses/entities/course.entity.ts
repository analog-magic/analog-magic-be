import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Course extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  teacher: string;

  @Prop({ required: true })
  capacity: number;

  @Prop({ required: true })
  price: string;

  @Prop({ required: true })
  starRating: string;

  // online, live
  @Prop({ required: true })
  category: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const CourseSchema = SchemaFactory.createForClass(Course);
