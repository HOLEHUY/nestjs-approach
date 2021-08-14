import { Controller, Get, Param, Post, Put } from '@nestjs/common';
import { FindTeacherResponseDto } from './dto/teacher.dto';

@Controller('teacher')
export class TeacherController {
  @Get()
  getTeachers(): FindTeacherResponseDto[] {
    return 'All Teachers';
  }

  @Get('/:teacherId')
  getTeacherById(
    @Param('teacherId') teacherId: string,
  ): FindTeacherResponseDto {
    return `Get teacher by Id ${teacherId}`;
  }
}
