import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicationRoutingModule } from './publication-routing.module';
import { ListPostComponent } from './views/list-post/list-post.component';
import { ModalShowPostComponent } from './components/modal-show-post/modal-show-post.component';
import { CreatePostComponent } from './views/create-post/create-post.component';
import { NgxEditorModule } from 'ngx-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { EditPostComponent } from './views/edit-post/edit-post.component';


@NgModule({
	declarations: [
		ListPostComponent,
		ModalShowPostComponent,
		CreatePostComponent,
  EditPostComponent,
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
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
		NgSelectModule,
		PublicationRoutingModule
	]
})
export class PublicationModule { }
