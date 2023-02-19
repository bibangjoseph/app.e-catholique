import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/core/services/core.service';

@Component({
	selector: 'app-liste-eglise',
	templateUrl: './liste-eglise.component.html',
	styleUrls: ['./liste-eglise.component.scss']
})
export class ListeEgliseComponent implements OnInit {
	isLoad = true;
	result: any;
	search = ''
	constructor(private coreService: CoreService) {

	}

	ngOnInit(): void {
		this.getEglises();
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


	getEglises() {
		this.coreService.get('eglises').then((res) => {
			console.log(res)
			this.result = res;
			this.isLoad = false
		})
	}
}
