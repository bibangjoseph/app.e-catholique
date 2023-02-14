import { CoreService } from 'src/app/core/services/core.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-modal-create-role',
	templateUrl: './modal-create-role.component.html',
	styleUrls: ['./modal-create-role.component.scss']
})
export class ModalCreateRoleComponent implements OnInit {
	modules: any
	permissions: any[] = [];
	isSubmit = false;
	denomination = '';
	constructor(private coreService: CoreService) {
		console.log('ok')
	}

	ngOnInit(): void {
		this.getModules();
	}

	getModules() {
		this.coreService.get('permissions').then((res) => {
			console.log(res)
			this.modules = res;
		})
	}

	checkPerm(event: any) {
		const checked = event.target.checked
		const value = event.target.value;
		if (checked === true) {
			this.permissions.push(value);
		} else {
			const index = this.permissions.indexOf(value);
			this.permissions.splice(index, 1)
		}
	}

	addRole() {
		if (this.denomination != '') {
			if (this.permissions.length > 2) {
				const data = {
					denomination: this.denomination,
					permissions: this.permissions
				}
				this.isSubmit = true;
				this.coreService.post('role', data).then((res) => {
					console.log(res)
				})
			} else {
				this.coreService.errorToast("Veuillez sélectionner au moins 3 permissions.");
			}
		} else {
			this.coreService.errorToast("Veuillez renseigner une dénomination.");
		}
	}
}
