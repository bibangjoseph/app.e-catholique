import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../core/template/layout/layout.component';
import { CreatePostComponent } from './views/create-post/create-post.component';
import { ListPostComponent } from './views/list-post/list-post.component';

const routes: Routes = [
	{

		path: '',
		component: LayoutComponent,
		children: [
			{ path: 'posts', component: ListPostComponent, title: 'Liste des Publications' },
			{ path: 'create', component: CreatePostComponent, title: "Création d'une Publications" },
			{ path: '', redirectTo: 'posts', pathMatch: 'full' },
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PublicationRoutingModule { }
