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
		this.courses = this.courseService.getCourses();
	}

	ngOnInit(): void {
		this.getCourses();
	}

	addCourse():void {
		this.courseService.addCourse();
	}

	getCourse(): Course {
		this.courseService.getCourse();
	}

	updateCourse(): Course {
		this.courseService.updateCourse();
	}




}
