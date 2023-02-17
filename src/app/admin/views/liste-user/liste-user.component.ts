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
	result: any;
	isLoad = true;
	search = '';
	constructor(private modal: NgbModal, private coreService: CoreService) { }

	ngOnInit(): void {
		this.getUsers()
	}

	addUser() {
		const modal = this.modal.open(ModalCreateUserComponent, { size: 'lg', backdrop: 'static' })
	}

	getUsers() {
		this.coreService.get('users').then((res: any) => {
			this.result = res;
			this.isLoad = false;
		})
	}

	paginate(url: any) {
		if (url != null) {
			this.isLoad = true;
			this.coreService.getPaginate(url).then((res: any) => {
				this.result = res;
				this.isLoad = false;
			})
		}
	}
}
