import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CoreService } from 'src/app/core/services/core.service';
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
}
