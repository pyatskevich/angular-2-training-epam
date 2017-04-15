import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { CourseService } from './course.service';
import { LoaderBlockService } from './loaderBlock.service';

@Component({
	selector: 'courses-container',
	templateUrl: './courses.component.html',
	styleUrls: ['./courses.component.css'],
	providers: [CourseService, LoaderBlockService],
//	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesComponent implements OnInit {
	header: string = 'Courses';


	constructor(private courseService:CourseService,
        private loaderBlockService:LoaderBlockService) {

	}

	getCourses():void {
		this.courseService.getCourses().subscribe(courses => {
			this.courses = courses;
		});
	}

	ngOnInit(): void {
        this.getCourses();
	}

	getCourse(title): void {
		this.courseService.getCourse(title).subscribe(courses => this.courses = courses);
	}

	/*updateCourse(): Course {
		this.courseService.updateCourse();
	}*/

	removeItem(course): void {
		this.loaderBlockService.showLoader();
		this.courseService.deleteCourse(course).subscribe(courses => {
			this.courses = courses;
			this.loaderBlockService.hideLoader();
		});
	}




}
