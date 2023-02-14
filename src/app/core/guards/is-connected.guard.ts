import { AuthService } from './../../auth/services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class IsConnectedGuard implements CanActivate {

	constructor(private authService: AuthService, private route: Router) {

	}
	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
		let isLoggedIn = this.authService.isAuthenticated();
		if (isLoggedIn) {
			return true;
		} else {
			this.route.navigate(['/login'])
		}
	}

}
