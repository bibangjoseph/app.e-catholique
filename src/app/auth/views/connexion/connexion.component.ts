import { CoreService } from './../../../core/services/core.service';
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-connexion',
	templateUrl: './connexion.component.html',
	styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent {
	loginForm: FormGroup | any
	isSubmit = false;
	constructor(private router: Router, private fb: FormBuilder, private authService: AuthService, private coreService: CoreService) {
		this.loginForm = this.fb.group({
			email: new FormControl('', [Validators.required, Validators.email]),
			password: new FormControl('', [Validators.required, Validators.minLength(6)])
		})
	}


	loginFunction() {
		this.isSubmit = true;
		this.authService.loginFunction(this.loginForm.value).then((res: any) => {
			if (res.success === true) {
				const user = res.data;
				localStorage.clear();
				localStorage.setItem('userConnected', JSON.stringify(user));
				window.location.href = '/dashboard';
			} else {
				this.coreService.errorToast(res.data)
				this.isSubmit = false;
			}
		})
	}
}
