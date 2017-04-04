import {Pipe, PipeTransform} from '@angular/core';
import _ from 'lodash';

@Pipe({
	name: 'orderBy'
})

export class OrderByPipe implements PipeTransform {
	transform(allCourses: any[], field: string) {
		console.log(allCourses, field);
		return _.sortBy(allCourses, field);
	}
}
