import { Component, Input, ViewEncapsulation } from '@angular/core';

import { Course } from './course';

@Component({
	selector: 'course-item',
	templateUrl: './course.component.html',
	styles: [require('./course.component.css')],
	providers: []
})
export class CourseComponent {
	constructor() {

	}
	@Input()  course: Course;
}
