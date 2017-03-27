import { Routes,RouterModule } from '@angular/router';
import { CoursesComponent } from './pages/courses/courses.component';
import { LoginComponent } from './pages/login/login.component';
import { AddComponent } from './pages/courses/add/add.component';

export const ROUTES: Routes = [
	{path: '', redirectTo:'courses', pathMatch: 'full'},
	{path: 'courses', component: CoursesComponent},
	{path: 'add', component: AddComponent},
	{path: 'login', component: LoginComponent},
];
