import { IsConnectedGuard } from './core/guards/is-connected.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './auth/views/connexion/connexion.component';
import { IsNotConnectedGuard } from './core/guards/is-not-connected.guard';

const routes: Routes = [
	{ path: 'login', component: ConnexionComponent, title: 'Authentification', canActivate: [IsNotConnectedGuard] },
	{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate: [IsConnectedGuard] },
	{ path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [IsConnectedGuard] },
	{ path: 'publication', loadChildren: () => import('./publication/publication.module').then(m => m.PublicationModule), canActivate: [IsConnectedGuard] },
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
