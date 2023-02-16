import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CoreService } from 'src/app/core/services/core.service';
import { ModalCreateUserComponent } from '../../components/modal-create-user/modal-create-user.component';

@Component({
	selector: 'app-liste-user',
	templateUrl: './liste-user.component.html',
	styleUrls: ['./liste-user.component.scss']
})
export class ListeUserComponent implements OnInit {

	constructor(private modal: NgbModal, private coreService: CoreService) { }

	ngOnInit(): void {
		this.getUsers()
	}

	addUser() {
		const modal = this.modal.open(ModalCreateUserComponent, { size: 'lg', backdrop: 'static' })
	}

	getUsers() {
		this.coreService.get('users').then((res: any) => {
			console.log(res)
		})
	}
}
