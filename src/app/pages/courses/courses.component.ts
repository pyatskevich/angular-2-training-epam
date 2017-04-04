import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { CourseService } from './course.service';

@Component({
	selector: 'courses-container',
	templateUrl: './courses.component.html',
	styleUrls: ['./courses.component.css'],
	providers: [CourseService],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesComponent implements OnInit {
	constructor(private courseService:CourseService) {

	}
	header = 'Courses';
	length = 0;
	courses;

	getCourses():void {
		this.courseService.getCourses().then(courses => {
			this.courses = courses;
			this.length = this.courses.length;
			console.log(this.length);
		});
	}

	ngOnInit(): void {
		this.getCourses();
	}

	addCourse(course):void {
		if (course.title && course.description) {
			this.courseService.addCourse(course).then(courses => {
				this.courses = courses;
				this.length = this.courses.length;
			});
		}

	}

	getCourse(title): void {
		this.courseService.getCourse(title).then(courses => this.courses = courses);
	}

	/*updateCourse(): Course {
		this.courseService.updateCourse();
	}*/

	removeItem(course): void {
		this.courseService.deleteCourse(course).then(courses => {
			this.courses = courses
			this.length = this.courses.length;
		});
	}




}
