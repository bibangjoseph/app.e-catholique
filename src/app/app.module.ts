import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { MenuAdminComponent } from './admin/menu/menu-admin/menu-admin.component';
import { ConnexionComponent } from './auth/views/connexion/connexion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPermissionsModule } from 'ngx-permissions';
import { NgSelectModule } from '@ng-select/ng-select';
import { LayoutComponent } from './core/template/layout/layout.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { MenuDashboardComponent } from './dashboard/menu/menu-dashboard/menu-dashboard.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EgliseModule } from './eglise/eglise.module';
import { MenuEgliseComponent } from './eglise/menu/menu-eglise/menu-eglise.component';
import { GeosModule } from './geos/geos.module';
import { MenuGeosComponent } from './geos/menu/menu-geos/menu-geos.component';
import { PublicationModule } from './publication/publication.module';
import { MenuPublicationComponent } from './publication/menu/menu-publication/menu-publication.component';


@NgModule({
	declarations: [
		AppComponent,
		MenuAdminComponent,
		ConnexionComponent,
		LayoutComponent,
		MenuDashboardComponent,
		MenuEgliseComponent,
		MenuGeosComponent,
		MenuPublicationComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		NgxPermissionsModule.forRoot(),
		Ng2SearchPipeModule,
		NgSelectModule,
		NgSelectModule,
		FormsModule,
		NgbModule,
		ReactiveFormsModule,
		AdminModule,
		DashboardModule,
		EgliseModule,
		GeosModule,
		PublicationModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
