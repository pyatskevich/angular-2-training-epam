import { Routes,RouterModule } from '@angular/router';
import { CoursesComponent } from './pages/courses/courses.component';
import { LoginComponent } from './pages/login/login.component';
import { AddComponent } from './pages/courses/add/add.component';
import { NotFoundComponent } from './pages/notFound/notFound.component';

export const ROUTES: Routes = [
	{path: '', redirectTo: 'courses', pathMatch: 'full'},
	// {path: 'courses/new', component: CoursesComponent},
	{path: 'courses/:id', component: AddComponent},
	{path: 'courses', component: CoursesComponent},
	{path: 'redirect', redirectTo: 'courses', pathMatch: 'full'},
	{path: 'add', component: AddComponent},
	{path: 'login', component: LoginComponent},
	{path: '**', component: NotFoundComponent},
];
