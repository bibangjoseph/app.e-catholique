import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../core/template/layout/layout.component';
import { ListeGeosComponent } from './views/liste-geos/liste-geos.component';

const routes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		children: [
			{ path: 'geos', component: ListeGeosComponent, title: 'Liste des entités géographique' },
			{ path: '', redirectTo: 'geos', pathMatch: 'full' }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class GeosRoutingModule { }
