import { NgModule } from '@angular/core';
import { CourseComponent } from './course.component';
import { CommonModule } from '@angular/common';
import { BorderDirective } from './border.directive';
import { DurationPipe } from './duration.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [CourseComponent, BorderDirective, DurationPipe],
	imports: [CommonModule, RouterModule],
	exports: [CourseComponent]
})
export class CourseModule {
	constructor() {
	}
}
