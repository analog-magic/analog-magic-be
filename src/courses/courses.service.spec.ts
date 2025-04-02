import { Test, TestingModule } from '@nestjs/testing';
import { CourseService } from './courses.service';
import { getModelToken } from '@nestjs/mongoose';
import { Course } from './entities/course.entity';
import { Model } from 'mongoose';

describe('CourseService', () => {
  let service: CourseService;
  let mockCourseModel: Partial<Model<Course>>;

  beforeEach(async () => {
    mockCourseModel = {
      find: jest.fn().mockReturnValue({
        exec: jest.fn().mockResolvedValue([]),
      }),
      findById: jest.fn().mockReturnValue({
        exec: jest.fn().mockResolvedValue({}),
      }),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CourseService,
        {
          provide: getModelToken(Course.name),
          useValue: mockCourseModel,
        },
      ],
    }).compile();

    service = module.get<CourseService>(CourseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all courses', async () => {
    const result = await service.findAll();
    expect(mockCourseModel.find).toHaveBeenCalled();
    expect(result).toEqual([]);
  });

  it('should return a single course by id', async () => {
    const result = await service.findOne('someId');
    expect(mockCourseModel.findById).toHaveBeenCalledWith('someId');
    expect(result).toEqual({});
  });
});
