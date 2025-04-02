import { Args, Query, Resolver } from '@nestjs/graphql';
import { Course } from './entities/course.entity';
import { CourseService } from './courses.service';

@Resolver('Course')
export class CoursesResolver {
  constructor(private readonly courseService: CourseService) {}

  @Query(() => [Course])
  courses() {
    return this.courseService.findAll();
  }

  @Query(() => Course, { nullable: true })
  course(@Args('id') id: string) {
    return this.courseService.findOne(id);
  }
}
