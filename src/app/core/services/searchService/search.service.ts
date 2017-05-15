import { Injectable } from '@angular/core';
import { Http, Response, Request, RequestOptions, Headers, URLSearchParams, RequestMethod } from '@angular/http';
import { Course } from '../../classes/course';
import { Observable } from "rxjs/Observable";

@Injectable()
export class SearchService {
	private baseUrl: string;

	constructor(private http: Http) {
		this.baseUrl = 'http://localhost:4001';
	}

	search(query: string): Observable<Course[]> {
		let requestOptions = new RequestOptions(),
			request: Request,
			urlParams: URLSearchParams = new URLSearchParams();

		urlParams.set('title_like', query);
		requestOptions.url = `${this.baseUrl}/courses`;
		requestOptions.method = RequestMethod.Get;
		requestOptions.search = urlParams;
		request = new Request(requestOptions);

		return this.http.request(request)
			.map((res: Response) => res.json())
			.map((courses) => courses.map((item) => new Course(item)));

	}
}
