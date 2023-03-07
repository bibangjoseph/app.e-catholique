import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/core/services/core.service';

@Component({
	selector: 'app-liste-geos',
	templateUrl: './liste-geos.component.html',
	styleUrls: ['./liste-geos.component.scss']
})
export class ListeGeosComponent implements OnInit {
	isLoad = true;
	result: any;
	search = ''

	constructor(private coreService: CoreService) {

	}

	ngOnInit(): void {
		this.getGeos();
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

	getGeos() {
		this.coreService.get('geos').then((res) => {
			this.result = res;
			this.isLoad = false
		})
	}
}
