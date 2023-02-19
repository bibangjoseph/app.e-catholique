import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EgliseRoutingModule } from './eglise-routing.module';
import { ListeEgliseComponent } from './views/liste-eglise/liste-eglise.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxPermissionsModule } from 'ngx-permissions';


@NgModule({
	declarations: [
		ListeEgliseComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		Ng2SearchPipeModule,
		NgSelectModule,
		NgxPermissionsModule.forRoot(),
		EgliseRoutingModule
	]
})
export class EgliseModule { }
