import { environnement } from './../config/env';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'


@Injectable({
	providedIn: 'root'
})
export class CoreService {
	api = environnement.api;
	constructor(private http: HttpClient) { }

	successToast(msg: string) {
		Swal.fire('Succès', msg, 'success')
	}
	errorToast(msg: any) {
		if (typeof msg === 'object') {
			var msgAll = '';
			msg.forEach((element: any) => {
				msgAll += '<i>' + element + '</i><br/>';
			});
			Swal.fire('Erreur', msgAll, 'error')
		} else {
			Swal.fire('Erreur', msg, 'error')
		}
	}



	// usuelles functions
	async get(url: any) {
		return new Promise((resolve) => {
			this.http.get(this.api + url).subscribe((res) => {
				resolve(res)
			})
		})
	}

	async getPaginate(url: any) {
		return new Promise((resolve) => {
			this.http.get(url).subscribe((res) => {
				resolve(res)
			})
		})
	}

	async post(url: any, data: any) {
		return new Promise((resolve) => {
			this.http.post(this.api + url, data).subscribe((res) => {
				resolve(res)
			})
		})
	}
	async put(url: any, data: any) {
		return new Promise((resolve) => {
			this.http.put(this.api + url, data).subscribe((res) => {
				resolve(res)
			})
		})
	}
	async delete(url: any) {
		return new Promise((resolve) => {
			this.http.delete(this.api + url).subscribe((res) => {
				resolve(res)
			})
		})
	}
}
