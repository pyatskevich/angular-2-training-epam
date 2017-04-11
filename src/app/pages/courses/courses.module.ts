import { NgModule } from '@angular/core';
import { CoursesComponent } from './courses.component';
import { CommonModule } from '@angular/common';
import { CourseModule } from './course/course.module';
import { LoaderBlockModule } from './loaderBlock/loaderBlock.module';
import { AddModule } from './add/add.module';
import { SearchModule } from './search';
import { OrderByPipe } from './orderby.pipe';

@NgModule({
	declarations: [CoursesComponent, OrderByPipe],
	imports: [
		CommonModule,
		CourseModule,
		SearchModule,
		AddModule,
		LoaderBlockModule
	],
	exports: [CoursesComponent]
})
export class CoursesModule {
	constructor() {
	}
}
