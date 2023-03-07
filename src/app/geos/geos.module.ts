import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeosRoutingModule } from './geos-routing.module';
import { ListeGeosComponent } from './views/liste-geos/liste-geos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxPermissionsModule } from 'ngx-permissions';


@NgModule({
	declarations: [
		ListeGeosComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		Ng2SearchPipeModule,
		NgSelectModule,
		NgxPermissionsModule.forRoot(),
		GeosRoutingModule
	]
})
export class GeosModule { }
