import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CoreService } from 'src/app/core/services/core.service';
import Swal from 'sweetalert2';
import { ModalCreateRoleComponent } from '../../components/modal-create-role/modal-create-role.component';
import { ModalUpdateRoleComponent } from '../../components/modal-update-role/modal-update-role.component';

@Component({
	selector: 'app-liste-role',
	templateUrl: './liste-role.component.html',
	styleUrls: ['./liste-role.component.scss']
})
export class ListeRoleComponent implements OnInit {
	isLoad = true;
	roles: any;
	searchText = '';

	constructor(private coreService: CoreService, private modal: NgbModal) {

	}

	ngOnInit(): void {
		this.getRoles()
	}

	//Modal d'ajout d'un rôle
	addRole() {
		const modal = this.modal.open(ModalCreateRoleComponent, { size: 'lg', backdrop: 'static' })
		modal.result.catch((reason) => {
			this.isLoad = true
			this.getRoles()
		})
	}

	// Recupération des Rôles
	getRoles() {
		this.coreService.get('roles').then((res) => {
			this.roles = res;
			this.isLoad = false;
		})
	}

	// Mise à jour d'un Rôle
	updateRole(item: any) {
		const modal = this.modal.open(ModalUpdateRoleComponent, { size: 'lg', backdrop: 'static' })
		modal.componentInstance.permissionsItems = item;
		modal.result.catch((reason) => {
			this.isLoad = true
			this.getRoles()
		})
	}

	deleteRole(item: any) {
		Swal.fire({
			icon: 'question',
			title: 'Suppression',
			html: `
			<i class="bi bi-trash icon-md"></i> <br>
			<h5> "${item.denomination}" </h5>
			<p> Souhaiez-vous vraiment supprimer ce rôle ?</p>
			`,
			showDenyButton: true,
			showCancelButton: false,
			confirmButtonText: 'Oui',
			denyButtonText: `Non`,
		}).then((result: any) => {
			if (result.isConfirmed) {
				this.coreService.delete('role/' + item.id).then((res: any) => {
					if (res.success === true) {
						this.coreService.successToast(res.data)
						this.isLoad = true;
						this.getRoles()
					} else {
						this.coreService.errorToast(res.data)
						this.isLoad = true;
						this.getRoles()
					}
				})
			}
		})
	}
}
