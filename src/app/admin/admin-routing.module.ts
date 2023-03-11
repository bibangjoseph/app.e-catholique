import { ListeRoleComponent } from './views/liste-role/liste-role.component';
import { ListeUserComponent } from './views/liste-user/liste-user.component';
import { LayoutComponent } from './../core/template/layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeAdminComponent } from './views/liste-admin/liste-admin.component';

const routes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		children: [
			{ path: 'users', component: ListeUserComponent, title: 'Liste des Utilisateurs' },
			{ path: 'roles', component: ListeRoleComponent, title: 'Liste des Rôles' },
			{ path: 'admins', component: ListeAdminComponent, title: 'Liste des Administrateurs' },
			{ path: '', redirectTo: 'users', pathMatch: 'full' },
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AdminRoutingModule { }
