import {Injectable} from '@angular/core';
import {Http, Response, Request, RequestOptions, Headers, URLSearchParams, RequestMethod} from '@angular/http';
import {User} from '../../classes/course';
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthService {
	private baseUrl: string;

	constructor(private http: Http) {
		this.baseUrl = 'http://localhost:4001';
	}

	login(data: any): Observable<User[]> {
		console.log(11);
		let requestOptions = new RequestOptions(),
			request: Request,
			urlParams: URLSearchParams = new URLSearchParams();

		requestOptions.url = `${this.baseUrl}/users`;
		requestOptions.method = RequestMethod.Get;
		request = new Request(requestOptions);

		this.http.request(request)
			.map((res: Response) => {
				console.log(res.json());
			})
		//.map((courses) => courses.map((item) => new Course(item)));

	}
}
