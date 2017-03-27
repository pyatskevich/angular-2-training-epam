import { Component, EventEmitter, Input, Output } from '@angular/core';

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
	@Output() done = new EventEmitter();

	editCourse(course) {
		this.courseService.updateCourse(course);
	}

	deleteCourse() {
		if (confirm("Do you really want to delete this course? ")) {
		  this.done.emit(this.course);
		}
	}
}
