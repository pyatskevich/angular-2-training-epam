import { Injectable } from '@angular/core';
import _ from 'lodash';
import { Course } from './course';
import { COURSES } from './mock-courses';

@Injectable()
export class CourseService {
    getCourses(): Course[]{
  		return COURSES;
	}
	addCourse(): {

	}
	getCourse(id): Course{
		 return _.find(COURSES, {id});
	}
	updareCourse(): Course {

	}

	deleteCourse(): void {

	}
}
