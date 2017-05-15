import { NgModule } from '@angular/core';
import { AddComponent } from './add.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
	declarations: [AddComponent],
	imports: [FormsModule],
	exports: [AddComponent]
})
export class AddModule {

	constructor() {
	}

}
