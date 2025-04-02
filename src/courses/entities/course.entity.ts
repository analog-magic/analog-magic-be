import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Types } from 'mongoose';
import { Field, ID, ObjectType, Float, Int } from '@nestjs/graphql';

@ObjectType()
@Schema({ timestamps: true })
export class Course {
  @Field(() => ID)
  id: string;

  @Field()
  @Prop({ required: true })
  title: string;

  @Field()
  @Prop({ required: true })
  description: string;

  @Field()
  @Prop({ required: true })
  teacher: string;

  @Field(() => Int)
  @Prop({ required: true, type: mongoose.Schema.Types.Number })
  capacity: number;

  @Field(() => Float)
  @Prop({ required: true, type: mongoose.Schema.Types.Number })
  price: number;

  @Field()
  @Prop({ required: true, type: mongoose.Schema.Types.String })
  starRating: string;

  @Field()
  @Prop({
    required: true,
    type: mongoose.Schema.Types.String,
    enum: ['online', 'live'],
  })
  category: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | null;
}

export const CourseSchema = SchemaFactory.createForClass(Course);
