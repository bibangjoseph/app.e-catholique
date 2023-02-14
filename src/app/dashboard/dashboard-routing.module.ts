import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LayoutComponent } from './../core/template/layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		children: [
			{ path: 'all', component: DashboardComponent, title: 'Tableau de Bord' },
			{ path: '', redirectTo: 'all', pathMatch: 'full' }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DashboardRoutingModule { }
