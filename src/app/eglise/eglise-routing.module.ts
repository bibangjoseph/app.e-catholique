import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../core/template/layout/layout.component';
import { ListeEgliseComponent } from './views/liste-eglise/liste-eglise.component';

const routes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		children: [
			{ path: 'eglises', component: ListeEgliseComponent, title: 'Liste des Eglises' },
			{ path: '', redirectTo: 'eglises', pathMatch: 'full' },
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class EgliseRoutingModule { }
