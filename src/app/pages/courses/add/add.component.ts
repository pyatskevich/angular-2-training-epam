import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Course} from '../course';

@Component({
	selector: 'add-course',
	templateUrl: './add.component.html',
	styleUrls: ['./add.component.css'],
	providers: []
})
export class AddComponent {
	@Output() done = new EventEmitter();
	newCourse: Course = new Course();
	constructor() {}
	addCourse():void {
		if (this.newCourse.title && this.newCourse.description) {
			this.courseService.addCourse(this.newCourse).subscribe(courses => {
    			this.courses = courses;
    		});
		}
	}

}
