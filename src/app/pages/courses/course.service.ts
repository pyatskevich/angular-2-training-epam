import { Injectable } from '@angular/core';
import _ from 'lodash';
import { Course } from './course';
import { COURSES } from './mock-courses';

@Injectable()
export class CourseService {
	courses: Course[];
	constructor() {
		this.courses = COURSES;
	}
    getCourses(): Promise<Course[]> {
		console.log('getCourses');
		return Promise.resolve(this.courses);
	}
	addCourse(course): Promise<Course[]> {
		course.time = '1h30m';
		course.date = Date.now();
		course.id = this.courses.length + 1;
		this.courses.push(course);
		return Promise.resolve(this.courses);
	}
	getCourse(title: String): Promise<Course> {
		console.log('addCourse');
		return Promise.resolve(_.find(this.courses, {title}));
	}
	updateCourse(course): void {
		console.log('updateCourse');
	}

	deleteCourse(course): Promise<Course[]> {
		this.courses = _.filter(this.courses, currentCourse => currentCourse.id !== course.id);
		return Promise.resolve(this.courses);
	}
}
