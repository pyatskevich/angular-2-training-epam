import { Component, Input } from '@angular/core';

@Component({
	selector: 'course-item',
	templateUrl: './course.component.html',
	styleUrls: ['./course.component.css'],
	providers: []
})
export class CourseComponent {
	constructor() {

	}
	@Input() course;
	@Input() courseService;

	editCourse(course) {
		this.courseService.updateCourse(course);
	}

	deleteCourse(course) {
		this.courseService.deleteCourse(course);
	}
}
