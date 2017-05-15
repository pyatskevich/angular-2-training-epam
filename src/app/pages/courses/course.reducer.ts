import { ActionReducer, Action } from '@ngrx/store';

export const ACTIONS = {
	ADD: 'add',
	UPDATE: 'update',
	DELETE: 'delete',
	GET: 'get'
};

const getCourses = function() {
	this.courseService.getCourses().subscribe(courses => {
		this.courses = courses;
	});
}

export const courseReducer: ActionReducer = (store: courses, action: Action) => {
	switch (action) {
		case ACTIONS.ADD:

			getCourses(): void {
			this.courseService.getCourses().subscribe(courses => {
			this.courses = courses;
		});
	}
			return [1];
		case ACTIONS.DELETE:
			return [2];
		case ACTIONS.UPDATE:
			return [2];
		case ACTIONS.GET:
			return [2];
		default:
			return [3];
	}
}
