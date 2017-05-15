import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: 'courseDuration'
})

export class DurationPipe implements PipeTransform {
	transform(time: string) {
		const parsedTime = parseInt(time);

		if (parsedTime < 60) {
			return `${parsedTime} min`
		} else {
			const timeInHours = parsedTime/60;
			const hours = Math.floor(timeInHours);
			const minutes = parsedTime - hours * 60;
			return `${hours} h ${minutes} min`
		}
	}

	getDecimal(num) {
  		return num - Math.floor(num);
	}
}
