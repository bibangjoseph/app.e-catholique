import { CoreService } from 'src/app/core/services/core.service';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

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
	constructor(private coreService: CoreService, private modal: NgbActiveModal) {
	}

	ngOnInit(): void {
		this.getModules();
	}

	getModules() {
		this.coreService.get('permissions').then((res) => {
			this.modules = res;
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
	}

	addRole() {
		if (this.denomination != '') {
			if (this.permissions.length > 2) {
				const data = {
					denomination: this.denomination,
					permissions: this.permissions
				}
				this.isSubmit = true;
				this.coreService.post('role', data).then((res: any) => {
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

	close() {
		this.modal.dismiss()
	}
}
