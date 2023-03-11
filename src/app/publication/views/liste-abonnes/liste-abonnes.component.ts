import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { CoreService } from 'src/app/core/services/core.service';

@Component({
	selector: 'app-liste-abonnes',
	templateUrl: './liste-abonnes.component.html',
	styleUrls: ['./liste-abonnes.component.scss']
})
export class ListeAbonnesComponent implements OnInit {
	result: any[] = [];
	search = '';
	isLoad = true
	user: any;

	constructor(private coreService: CoreService, private authService: AuthService) {

	}
	paginate(url: string) {

	}

	ngOnInit(): void {
		this.user = this.authService.getInfoUser();
		this.getAbonnes();


	}

	async getAbonnes() {
		this.coreService.get('abonnes/' + this.user.eglise_id).then((res: any) => {
			if (res.length > 0) {
				this.result = res;
				this.isLoad = false;
			} else {
				this.result = [];
				this.isLoad = false;
			}

		})
	}
}
