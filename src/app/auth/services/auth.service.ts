import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from '../models/auth';
import { environnement } from 'src/app/core/config/env';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	isLoggedIn = false;
	api = environnement.api
	constructor(private http: HttpClient) { }

	isAuthenticated() {
		let sto = localStorage.getItem('userConnected')
		if (sto != null) {
			this.isLoggedIn = true;
		}
		return this.isLoggedIn;
	}

	isNotAuthenticated() {
		let sto = localStorage.getItem('userConnected')
		if (sto === null) {
			this.isLoggedIn = true;
		}
		return this.isLoggedIn;
	}

	getInfoUser() {
		let sto = localStorage.getItem('userConnected')
		if (sto != null) {
			let user = JSON.parse(sto)
			return user;
		}
	}

	loginFunction(credentials: Auth) {
		return new Promise((resolve) => {
			this.http.post(this.api + 'login', credentials).subscribe((res: any) => {
				resolve(res);
			})
		})
	}

	logout() {
		localStorage.clear();
		window.location.href = '/login';
	}
}
