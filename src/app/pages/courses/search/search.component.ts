import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
	selector: 'search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.css'],
	providers: []
})
export class SearchComponent {
	@Output() done = new EventEmitter();
	constructor() {

	}
	search(title): void {
		this.done.emit();
	}

}
