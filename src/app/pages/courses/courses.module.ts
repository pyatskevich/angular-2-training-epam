import { NgModule } from '@angular/core';
import { CoursesComponent } from './courses.component';
import { CommonModule } from '@angular/common';
import { CourseModule } from './course';

@NgModule({
	declarations: [CoursesComponent],
	imports: [CommonModule, CourseModule],
	exports: [CoursesComponent]
})
export class CoursesModule {
	constructor() {
	}
}
