import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CoreService } from 'src/app/core/services/core.service';

@Component({
	selector: 'app-modal-create-user',
	templateUrl: './modal-create-user.component.html',
	styleUrls: ['./modal-create-user.component.scss']
})
export class ModalCreateUserComponent implements OnInit {
	roles: any
	user = {
		role_id: ''
	}
	userForm: FormGroup | any
	constructor(private modal: NgbActiveModal, private coreService: CoreService, private fb: FormBuilder) {

	}


	submitForm() {

	}


	ngOnInit(): void {
		this.userForm = this.fb.group({
			nom: new FormControl('', [Validators.required]),
			prenom: new FormControl('', [Validators.required]),
			email: new FormControl('', [Validators.required, Validators.email]),
			date_naissance: new FormControl('', [Validators.required]),
			sexe: new FormControl('H', [Validators.required]),
			role_id: new FormControl('', [Validators.required]),
		})
		this.getRoles()
	}
	close() {
		this.modal.dismiss()
	}

	getRoles() {
		this.coreService.get('roles').then((res: any) => {
			this.roles = res;
			console.log(res)
		})
	}
}
