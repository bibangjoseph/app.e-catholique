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
import { NgxEditorModule } from 'ngx-editor';


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
		PublicationModule,
		NgxEditorModule.forRoot(
			{
				locals: {
					// menu
					bold: 'Bold',
					italic: 'Italic',
					code: 'Code',
					underline: 'Underline',
					strike: 'Strike',
					blockquote: 'Blockquote',
					bullet_list: 'Bullet List',
					ordered_list: 'Ordered List',
					heading: 'Heading',
					h1: 'Header 1',
					h2: 'Header 2',
					h3: 'Header 3',
					h4: 'Header 4',
					h5: 'Header 5',
					h6: 'Header 6',
					align_left: 'Left Align',
					align_center: 'Center Align',
					align_right: 'Right Align',
					align_justify: 'Justify',
					text_color: 'Text Color',
					background_color: 'Background Color',
					insertLink: 'Insert Link',
					removeLink: 'Remove Link',
					insertImage: 'Insert Image',

					// pupups, forms, others...
					url: 'URL',
					text: 'Text',
					openInNewTab: 'Open in new tab',
					insert: 'Insert',
					altText: 'Alt Text',
					title: 'Title',
					remove: 'Remove',
				},
			}
		),
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
