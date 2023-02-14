import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable({
	providedIn: 'root'
})
export class IsNotConnectedGuard implements CanActivate {
	constructor(private authService: AuthService, private route: Router) {

	}
	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
		let isLoggedIn = this.authService.isNotAuthenticated();
		if (isLoggedIn) {
			return true;
		} else {
			this.route.navigate(['/dashboard'])
		}
	}

}
