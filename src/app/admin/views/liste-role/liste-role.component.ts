import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/core/services/core.service';

@Component({
	selector: 'app-liste-role',
	templateUrl: './liste-role.component.html',
	styleUrls: ['./liste-role.component.scss']
})
export class ListeRoleComponent implements OnInit {
	isLoad = true;
	roles: any;
	searchText = '';

	constructor(private coreService: CoreService) {

	}

	ngOnInit(): void {
		this.getRoles()
	}


	getRoles() {
		this.coreService.get('roles').then((res) => {
			this.roles = res;
			this.isLoad = false;
		})
	}
}
