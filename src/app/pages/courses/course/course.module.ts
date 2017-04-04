import { NgModule } from '@angular/core';
import { CourseComponent } from './course.component';
import { CommonModule } from '@angular/common';
import { BorderDirective } from './border.directive';
import { DurationPipe } from './duration.pipe';


@NgModule({
	declarations: [CourseComponent, BorderDirective, DurationPipe],
	imports: [CommonModule],
	exports: [CourseComponent]
})
export class CourseModule {
	constructor() {
	}
}
