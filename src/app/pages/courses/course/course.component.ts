import { Component, Input } from '@angular/core';

import { Course } from './course';

@Component({
	selector: 'course-item',
	templateUrl: './course.component.html',
	styleUrls: ['./course.component.scss'],
	providers: []
})
export class CourseComponent {
	constructor() {

	}
	@Input()  course: Course;
}
