import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
	NgModule,
	ApplicationRef,
	CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';
import {
	removeNgStyles,
	createNewHosts,
} from '@angularclass/hmr';
import {
	RouterModule,
	PreloadAllModules
} from '@angular/router';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';

// Components
import { HeaderModule, FooterModule } from './core/components';

// Pages
import { CoursesModule } from './pages/courses';
import { LoginModule } from './pages/login';
import { AddModule } from './pages/courses/add';
import {MaterialModule} from '@angular/material';

// Services
// import { CourseService } from './core/services/courseService';

// Application wide providers
const APP_PROVIDERS = [
	// CourseService
];

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
	bootstrap: [AppComponent],
	declarations: [
		AppComponent
	],
	imports: [ // import Angular's modules
		BrowserModule,
		FormsModule,
		HttpModule,
		RouterModule.forRoot(ROUTES, {useHash: true, preloadingStrategy: PreloadAllModules}),
		HeaderModule,
		FooterModule,
		CoursesModule,
		MaterialModule,
		LoginModule,
		AddModule
	],
	providers: [ // expose our Services and Providers into Angular's dependency injection
		ENV_PROVIDERS,
		APP_PROVIDERS
	],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {

	constructor(public appRef: ApplicationRef) {
	}

	public hmrOnInit(store: any) {
		if (!store || !store.state) { return; }
		this.appRef.tick();
		delete store.state;
	}

	public hmrOnDestroy(store: any) {
		const cmpLocation = this.appRef.components.map((cmp) => cmp.location.nativeElement);
		// recreate elements
		store.disposeOldHosts = createNewHosts(cmpLocation);
		// remove styles
		removeNgStyles();
	}

	public hmrAfterDestroy(store: any) {
		// display new elements
		store.disposeOldHosts();
		delete store.disposeOldHosts;
	}

}
