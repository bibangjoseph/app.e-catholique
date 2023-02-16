import { LoadingComponent } from './../core/components/loading/loading.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ListeUserComponent } from './views/liste-user/liste-user.component';
import { ListeRoleComponent } from './views/liste-role/liste-role.component';
import { NgxPermissionsModule } from 'ngx-permissions';
import { ModalCreateUserComponent } from './components/modal-create-user/modal-create-user.component';
import { ModalCreateRoleComponent } from './components/modal-create-role/modal-create-role.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ModalUpdateRoleComponent } from './components/modal-update-role/modal-update-role.component';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
	declarations: [
		ListeUserComponent,
		ListeRoleComponent,
		ModalCreateUserComponent,
		ModalCreateRoleComponent,
		LoadingComponent,
		ModalUpdateRoleComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		Ng2SearchPipeModule,
		NgSelectModule,
		NgxPermissionsModule.forRoot(),
		AdminRoutingModule
	]
})
export class AdminModule { }
