import { NgModule } from '@angular/core';
import { CoursesComponent } from './courses.component';
import { CommonModule } from '@angular/common';
import { CourseModule } from './course/course.module';
import { AddModule } from './add/add.module';
import { SearchModule } from './search';

@NgModule({
	declarations: [CoursesComponent],
	imports: [
		CommonModule,
		CourseModule,
		SearchModule,
		AddModule
	],
	exports: [CoursesComponent]
})
export class CoursesModule {
	constructor() {
	}
}
