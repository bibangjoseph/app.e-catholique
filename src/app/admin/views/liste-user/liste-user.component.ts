import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalCreateUserComponent } from '../../components/modal-create-user/modal-create-user.component';

@Component({
	selector: 'app-liste-user',
	templateUrl: './liste-user.component.html',
	styleUrls: ['./liste-user.component.scss']
})
export class ListeUserComponent implements OnInit {

	constructor(private modal: NgbModal) { }

	ngOnInit(): void {

	}

	addUser() {
		const modal = this.modal.open(ModalCreateUserComponent, { size: 'lg', backdrop: 'static' })
	}
}
