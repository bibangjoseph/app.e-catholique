import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-modal-show-post',
	templateUrl: './modal-show-post.component.html',
	styleUrls: ['./modal-show-post.component.scss']
})
export class ModalShowPostComponent implements OnInit {
	@Input() post: any;
	constructor(private modal: NgbActiveModal) {
	}

	ngOnInit(): void {
		console.log(this.post)
	}
	close() {
		this.modal.dismiss()
	}
}
