import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: 'courseDuration'
})

export class DurationPipe implements PipeTransform {
	transform(time: string) {

		if (time < 60) {
			return `${time} min`
		} else {
			const timeInHours = parseInt(time)/60;
			const hours = Math.floor(timeInHours);
			const minutes = parseInt(time) - hours * 60;
			return `${hours} h ${minutes} min`
		}
	}

	getDecimal(num) {
  		return num - Math.floor(num);
	}
}
