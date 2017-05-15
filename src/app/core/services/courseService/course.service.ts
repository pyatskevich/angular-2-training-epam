import { Injectable } from '@angular/core';
import _ from 'lodash';
import { Http, Response, Request, RequestOptions, Headers, URLSearchParams, RequestMethod } from '@angular/http';
import { Course } from '../../classes/course';
import { Observable } from "rxjs/Observable";

@Injectable()
export class CourseService {
	private baseUrl: string;
	public courses : Course[];
	constructor(private http: Http) {
		this.baseUrl = 'http://localhost:4001';
	}
  	getCourses(): Course[] {
		let requestOptions = new RequestOptions(),
			request: Request,
			urlParams: URLSearchParams = new URLSearchParams();

		requestOptions.url = `${this.baseUrl}/courses`;
		requestOptions.method = RequestMethod.Get;
		request = new Request(requestOptions);

		this.courses = this.http.request(request)
		    .map((res: Response) => res.json())
		    .map((courses) => courses.map((item) => new Course(item)));

		return this.courses;
	}

	addCourse(course): Observable<Course[]> {
	    course.id = this.courses.length + 1;
	    course.topRated = false;
		let requestOptions = new RequestOptions(),
			request: Request,
			urlParams: URLSearchParams = new URLSearchParams();

		requestOptions.url = `${this.baseUrl}/courses`;
		requestOptions.method = RequestMethod.Put;
		request = new Request(requestOptions);

		this.courses = this.http.request(request)
			.map((res: Response) => res.json())
			.map((courses) => courses.map((item) => new Course(item)));

		return this.courses;
	}
	getCourse(title: String): Observable<Course> {
    	return new Observable(observer => observer.next(_.find(this.courses, {title})));
	}
	updateCourse(course): void {
		console.log('updateCourse');
	}

	deleteCourse(course): Observable<Course[]> {
		let requestOptions = new RequestOptions(),
			request: Request;

		requestOptions.url = `${this.baseUrl}/courses`;
		requestOptions.body = course;
		requestOptions.method = RequestMethod.Delete;
		request = new Request(requestOptions);

		this.courses = this.http.request(request)
			.map((res: Response) => {
			console.log(res.json());
			return res.json();
			})
			.map((courses) => courses.map((item) => new Course(item)));

		return this.courses;
	}
}
