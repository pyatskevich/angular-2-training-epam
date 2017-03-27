import { Component} from '@angular/core';
import { AuthService } from './auth.service';

@Component({
	selector: 'app',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
		providers: [AuthService]
})
export class LoginComponent {
	constructor(private authService:AuthService) {

	}
	doLogin(data): void {
		this.authService.login(data);
	}
}
