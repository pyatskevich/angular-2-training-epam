import { Component} from '@angular/core';

import { CourseService } from './core/services/courseServices';

@Component({
	selector: 'courses-container',
	templateUrl: './courses.component.html',
	styleUrls: ['./courses.component.css'],
	//providers: [CourseService]
})
export class CoursesComponent {
	constructor(private courseService:CourseService) {

	}
	header = 'Courses';
	courses;
	getCourses():void {
		this.courses = this.courseService.getList();
	}


}
