import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CoreService } from 'src/app/core/services/core.service';

@Component({
	selector: 'app-modal-update-role',
	templateUrl: './modal-update-role.component.html',
	styleUrls: ['./modal-update-role.component.scss']
})
export class ModalUpdateRoleComponent implements OnInit {
	modules: any
	idRole: any
	permissions: any[] = [];
	isSubmit = false;
	denomination = '';
	@Input() permissionsItems: any
	constructor(private coreService: CoreService, private modal: NgbActiveModal) {
	}

	ngOnInit(): void {
		this.getModules();
	}

	getModules() {
		this.coreService.get('permissions').then((res) => {
			this.loadPermissionsChecked(res)
		})
	}

	checkPerm(event: any) {
		const checked = event.target.checked
		const value = parseInt(event.target.value);
		if (checked === true) {
			this.permissions.push(value);
		} else {
			const index = this.permissions.indexOf(value);
			this.permissions.splice(index, 1)
		}

		console.log(this.permissions)
	}

	close() {
		this.modal.dismiss()
	}


	loadPermissionsChecked(res: any) {
		res.forEach((module: any) => {
			module.permissions.forEach((permission: any) => {
				this.permissionsItems.permissions.forEach((perm: any) => {
					if (permission.id === perm.id) {
						permission.checked = true;
						this.permissions.push(permission.id)
					}
				});
			});
		});
		this.denomination = this.permissionsItems.denomination;
		this.idRole = this.permissionsItems.id;
		this.modules = res;
	}

	updateRole() {
		if (this.denomination != '') {
			if (this.permissions.length > 2) {
				const data = {
					denomination: this.denomination,
					permissions: this.permissions
				}
				this.isSubmit = true;
				this.coreService.put('role/' + this.idRole, data).then((res: any) => {
					if (res.success === true) {
						this.coreService.successToast(res.data)
						this.isSubmit = false;
						this.modal.dismiss(2)
					} else {
						this.coreService.errorToast(res.data)
						this.isSubmit = false;
						this.modal.dismiss(2)
					}
				})
			} else {
				this.coreService.errorToast("Veuillez sélectionner au moins 3 permissions.");
			}
		} else {
			this.coreService.errorToast("Veuillez renseigner une dénomination.");
		}
	}
}
