import { Component, OnInit } from '@angular/core';

import { CourseService } from './course.service';

@Component({
	selector: 'courses-container',
	templateUrl: './courses.component.html',
	styleUrls: ['./courses.component.css'],
	providers: [CourseService]
})
export class CoursesComponent implements OnInit {
	constructor(private courseService:CourseService) {

	}
	header = 'Courses';
	courses;

	getCourses():void {
		this.courseService.getCourses().then(courses => this.courses = courses);
	}

	ngOnInit(): void {
		this.getCourses();
	}

	addCourse(course):void {
		console.log('course', course);
		this.courseService.addCourse(course).then(courses => this.courses = courses);
	}

	getCourse(title): void {
		this.courseService.getCourse(title).then(courses => this.courses = courses);
	}

	/*updateCourse(): Course {
		this.courseService.updateCourse();
	}*/

	removeItem(course): void {
		this.courseService.deleteCourse(course).then(courses => this.courses = courses);
	}




}
