import { User } from './../../../admin/models/user';
import { AuthService } from 'src/app/auth/services/auth.service';
import { environnement } from 'src/app/core/config/env';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
	appName = environnement.appName
	user: User;
	constructor(private authService: AuthService, private permissionService: NgxPermissionsService) {
		this.user = this.authService.getInfoUser();
	}

	ngOnInit(): void {
		this.permissionService.loadPermissions(this.user.permissions);
	}


	logout() {
		Swal.fire({
			icon: 'warning',
			title: 'Déconnexion',
			text: 'Vous êtes sur le point de vous déconnecter ?',
			showDenyButton: true,
			showCancelButton: false,
			confirmButtonText: 'Oui',
			denyButtonText: `Non`,
		}).then((result: any) => {
			if (result.isConfirmed) {
				this.authService.logout();
			}
		})
	}
}
