import { Component } from '@angular/core';
import { LoaderBlockService } from './loaderBlock.service';

@Component({
	selector: 'loader-spinner',
	templateUrl: './loaderBlock.component.html',
	styleUrls: ['./loaderBlock.component.css'],
	providers: [LoaderBlockService]
})
export class LoaderBlockComponent {
	constructor(private loaderBlockService:LoaderBlockService) {

	}
}
