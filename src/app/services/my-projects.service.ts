import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GlobalService } from './global-service.service';

@Injectable({
	providedIn: 'root'
})
export class MyProjectsService {
	constructor(private http: HttpClient, private globalService: GlobalService) {}
	getMyProjects() {
		const resp = this.http.get(`${this.globalService.apiURL}/projects/my-projects/${localStorage.getItem('userId')}`);
		return resp;
	}
}
