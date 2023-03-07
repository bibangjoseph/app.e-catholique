import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CoreService } from 'src/app/core/services/core.service';

@Component({
	selector: 'app-modal-form-geo',
	templateUrl: './modal-form-geo.component.html',
	styleUrls: ['./modal-form-geo.component.scss']
})
export class ModalFormGeoComponent {
	roles: any
	user = {
		role_id: ''
	}
	geoForm: FormGroup | any
	isSubmit = false
	constructor(private modal: NgbActiveModal, private coreService: CoreService, private fb: FormBuilder) {

	}


	submitForm() {
		this.isSubmit = true;
		this.coreService.post('geo', this.geoForm.value).then((res: any) => {
			if (res.success === true) {
				this.coreService.successToast(res.data)
				this.isSubmit = false;
				this.geoForm.reset()
				this.modal.dismiss(2)
			} else {
				this.coreService.errorToast(res.data)
				this.isSubmit = false;
			}
		})
	}


	ngOnInit(): void {
		this.geoForm = this.fb.group({
			denomination: new FormControl('', [Validators.required]),
			indicatif: new FormControl(null),
			type: new FormControl('', [Validators.required, Validators.email]),
			parent_id: new FormControl(null),
		})
		this.getGeos()
	}
	close() {
		this.modal.dismiss()
	}

	getGeos() {
		this.coreService.get('geos-liste').then((res: any) => {
			this.roles = res;
		})
	}
}
