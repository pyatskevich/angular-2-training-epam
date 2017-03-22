import { Injectable } from '@angular/core';
import _ from 'lodash';
import { Course } from './course';
import { COURSES } from './mock-courses';

@Injectable()
export class CourseService {
	course: Course[];
	constructor() {
		this.course = COURSES;
	}
    getCourses(): Course[]{
  		return this.course;
	}
	addCourse(): void{

	}
	getCourse(title: String): Course{
		 return _.find(this.course, {title});
	}
	updateCourse(course): void {
console.log(1111);
	}

	deleteCourse(course): void {
			this.course = _.filter(this.course, currentCourse => currentCourse.id !== course.id)
			console.log(this.course);
	}
}
