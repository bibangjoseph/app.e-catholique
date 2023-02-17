import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicationRoutingModule } from './publication-routing.module';
import { ListPostComponent } from './views/list-post/list-post.component';
import { ModalShowPostComponent } from './components/modal-show-post/modal-show-post.component';
import { CreatePostComponent } from './views/create-post/create-post.component';


@NgModule({
	declarations: [
		ListPostComponent,
  ModalShowPostComponent,
  CreatePostComponent,
	],
	imports: [
		CommonModule,
		PublicationRoutingModule
	]
})
export class PublicationModule { }
