import { Injectable } from '@angular/core';
import _ from 'lodash';
import { Course } from './course';
import { COURSES } from './mock-courses';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CourseService {
    courses: Course[];
	constructor() {
		this.courses = COURSES;
	}
    getCourses(): Observable<Course[]> {
        return new Observable(observer => observer.next(this.courses));
	}

	addCourse(course): Observable<Course[]> {
		course.id = this.courses.length + 1;
        course.topRated = false;
		this.courses.push({...course});
        console.log(typeof course);
        return new Observable(observer => observer.next(this.courses));
	}
	getCourse(title: String): Observable<Course> {
        return new Observable(observer => observer.next(_.find(this.courses, {title})));
	}
	updateCourse(course): void {
		console.log('updateCourse');
	}

	deleteCourse(course): Observable<Course[]> {
		this.courses = _.filter(this.courses, currentCourse => currentCourse.id !== course.id);
        return new Observable(observer => observer.next(this.courses));
	}
}
