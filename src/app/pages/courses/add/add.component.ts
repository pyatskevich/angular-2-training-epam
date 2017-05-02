import {Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import {Course} from '../../../core/classes/course';
import {CourseService} from '../../../core/services/courseService';
import {ActivatedRoute} from "@angular/router";
import {Http, Response, Request, RequestOptions, Headers, URLSearchParams, RequestMethod} from '@angular/http';

@Component({
	selector: 'add-course',
	templateUrl: './add.component.html',
	styleUrls: ['./add.component.css'],
	providers: []
})
export class AddComponent implements OnInit {
	private baseUrl: string;
	@Output() done = new EventEmitter();
	newCourse: Course = new Course();
	public routerParams: any = {};

	constructor(private courseService: CourseService,
				private route: ActivatedRoute,
				private http: Http) {
		this.baseUrl = 'http://localhost:4001';
	}

	ngOnInit() {
		let requestOptions = new RequestOptions(),
			request: Request,
			urlParams: URLSearchParams = new URLSearchParams();

		requestOptions.url = `${this.baseUrl}/courses`;
		requestOptions.method = RequestMethod.Get;
		request = new Request(requestOptions);

		this.http.request(request)
			.map((res: Response) => {
				console.log(11111111);
				return res.json();
			})
			.map((courses) => courses.map((item) => new Course(item)));

		//return this.courses;



	}

	addCourse(): void {
		if (this.newCourse.title && this.newCourse.description) {
			this.courseService.addCourse(this.newCourse).subscribe(courses => {
				console.log(courses);
			});
		}
	}

}
