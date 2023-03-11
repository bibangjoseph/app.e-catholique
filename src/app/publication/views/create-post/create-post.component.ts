import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Editor, Toolbar } from 'ngx-editor';
import { User } from 'src/app/admin/models/user';
import { Auth } from 'src/app/auth/models/auth';
import { AuthService } from 'src/app/auth/services/auth.service';
import { CoreService } from 'src/app/core/services/core.service';


@Component({
	selector: 'app-create-post',
	templateUrl: './create-post.component.html',
	styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
	editor!: Editor;
	toolbar: Toolbar = [
		['bold', 'italic'],
		['underline', 'strike'],
		['ordered_list', 'bullet_list'],
		[{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
		['text_color', 'background_color'],
		['align_left', 'align_center', 'align_right', 'align_justify'],
	];
	html = '';
	categories: any;
	postForm: FormGroup | any
	mois = new Date().getMonth() + 1
	annee = new Date().getFullYear()
	images: any[] = []
	user: User;
	isSubmit = false
	constructor(private coreService: CoreService, private fb: FormBuilder, private authService: AuthService) {
		this.user = this.authService.getInfoUser();



	}

	ngOnInit(): void {
		this.postForm = this.fb.group({
			titre: new FormControl('', [Validators.required]),
			description: new FormControl('', [Validators.required]),
			categorie: new FormControl('', [Validators.required]),
			medias: new FormControl('', [Validators.required, Validators.minLength(2)]),
			visible: new FormControl('Non', [Validators.required]),
			active_comment: new FormControl('Non', [Validators.required]),
			mois: new FormControl(this.mois, [Validators.required]),
			annee: new FormControl(this.annee, [Validators.required]),
			eglise_id: new FormControl(this.user.eglise_id),
			user_id: new FormControl(this.user.id),
		})
		this.editor = new Editor();
		this.getCategorie();
	}

	getCategorie() {
		this.coreService.get('categories').then((res) => {
			this.categories = res
		})
	}

	createPost() {
		this.postForm.value.medias = this.images;
		if (this.postForm.valid) {
			this.isSubmit = true;
			this.coreService.post('publication', this.postForm.value).then((res: any) => {
				if (res.success === true) {
					this.coreService.successToast(res.data)
					this.isSubmit = false;
					this.postForm.reset()
					this.images = [];
				} else {
					this.coreService.errorToast(res.data)
					this.isSubmit = false;
				}
			})
		} else {
			this.coreService.errorToast('Veuillez renseigner correctement le formulaire')
		}
	}

	onFileChange(event: any) {
		if (this.images.length < 5) {
			if (event.target.files && event.target.files[0]) {
				var filesAmount = event.target.files.length;
				for (let i = 0; i < filesAmount; i++) {
					var reader = new FileReader();
					reader.onload = (event: any) => {
						this.images.push(event.target.result);
					}
					reader.readAsDataURL(event.target.files[i]);
				}
			}
		} else {
			this.coreService.errorToast("Le maximum est de 5 images")
		}

	}

	remove(index: any) {
		this.images.splice(index, 1);
	}
}
