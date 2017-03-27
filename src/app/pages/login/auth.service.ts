import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    login(data): void {
		if (data.login === 'admin' && data.password === 'admin') {
			localStorage.setItem('loginIn', 'true');
		}

	}
}
