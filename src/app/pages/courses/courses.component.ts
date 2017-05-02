import { Component, OnInit, OnDestroy } from '@angular/core';
//import { LoaderBlockService } from './loaderBlock.service';
import { SearchService } from '../../core/services/searchService';
import { Observable, Subscription } from 'rxjs/Observable';
import { CourseService } from '../../core/services/courseService';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/debounce';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switch';
import { Course } from '../../core/classes/course';

@Component({
	selector: 'courses-container',
	templateUrl: './courses.component.html',
	styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
	public header: string = 'Courses';
	public searchBar: FormControl;
	public isLoading: boolean = false;
	public courses: Course[];

	constructor(private courseService: CourseService,
				private searchService: SearchService) {
		this.searchBar = new FormControl('', []);
	}

	getCourses(): void {
		this.courseService.getCourses().subscribe(courses => {
			this.courses = courses;
		});
	}

	ngOnInit(): void {
		this.courses = this.getCourses();
		this.searchBar.valueChanges
			.map((query: string) => query.trim())
			//.filter((query: string) => query && query.length >= 3)
			//.debounce(() => Observable.timer(250))
			.map((query: string) => this.searchService.search(query))
			.switch()
			.map((courses: Course[]) => {
			console.log('test',courses);
				return courses;
			})
			.subscribe((courses: Course[]) => {
				console.log(courses);
				this.courses = courses;
			});
	}

	// getCourse(title): void {
	// 	this.courseService.getCourse(title).subscribe((courses: Course[]) => {
	// 		this.courses = courses;
	// 	});
	// }

	/*updateCourse(): Course {
	 this.courseService.updateCourse();
	 }*/

	removeItem(course): void {
		this.courseService.deleteCourse(course).subscribe((courses: Course[]) => {
			this.courses = courses;
			//this.loaderBlockService.hideLoader();
		});
	}

}
