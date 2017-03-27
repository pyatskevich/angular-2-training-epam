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
	constructor() {

	}

	saveCourse() {
		this.done.emit(this.newCourse);
		this.newCourse = new Course();
	}

}
