import { Component, ViewEncapsulation} from '@angular/core';

@Component({
	selector: 'courses-container',
	templateUrl: './courses.component.html',
	styles: [require('./courses.component.css')],
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class CoursesComponent {
	constructor() {

	}
	header = 'Courses';
	courses = [
		{
			title: 'course 1',
			time: '1h30m',
			date: '13-03-2017',
			description: 'Some description',
			id: 1
		},
		{
			title: 'course 2',
			time: '2h30m',
			date: '13-03-2017',
			description: 'Some description',
			id: 2
		},
		{
			title: 'course 3',
			time: '1h20m',
			date: '13-03-2017',
			description: 'Some description',
			id: 3
		},
		{
			title: 'course 4',
			time: '1h50m',
			date: '13-03-2017',
			description: 'Some description',
			id: 4
		}

	]
}
