import { Injectable } from '@angular/core';

import { Course } from './course';
import { COURSES } from './mock-courses';

@Injectable()
export class CourseService {
    getList(): Course[]{
		return COURSES;
	}
}
