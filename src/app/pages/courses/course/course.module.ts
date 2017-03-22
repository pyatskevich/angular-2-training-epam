import { NgModule } from '@angular/core';
import { CourseComponent } from './course.component';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [CourseComponent],
	imports: [CommonModule],
	exports: [CourseComponent]
})
export class CourseModule {
	constructor() {
	}
}
