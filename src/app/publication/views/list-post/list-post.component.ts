import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/admin/models/user';
import { AuthService } from 'src/app/auth/services/auth.service';
import { CoreService } from 'src/app/core/services/core.service';
import { ModalShowPostComponent } from '../../components/modal-show-post/modal-show-post.component';

@Component({
	selector: 'app-list-post',
	templateUrl: './list-post.component.html',
	styleUrls: ['./list-post.component.scss']
})
export class ListPostComponent implements OnInit {
	posts: any;
	isLoad = true;
	user: User;
	data: any[] = [];
	links: any;
	total: any
	constructor(private coreService: CoreService, private authService: AuthService, private modal: NgbModal) {
		this.user = this.authService.getInfoUser();
	}

	ngOnInit(): void {
		this.getPosts()
	}

	getPosts() {
		this.coreService.get('publications/' + this.user.eglise_id).then((res: any) => {
			this.data = res.data
			this.links = res.links
			this.total = res.total
			this.isLoad = false
		})
	}

	paginate(url: any) {
		if (url != null) {
			this.isLoad = true;
			this.coreService.getPaginate(url).then((res: any) => {
				this.data = res.data
				this.links = res.links
				this.total = res.total
				this.isLoad = false
			})
		}
	}

	show(post: any) {
		const modal = this.modal.open(ModalShowPostComponent, { size: 'xl', backdrop: 'static', scrollable: true });
		modal.componentInstance.post = post
	}


}
