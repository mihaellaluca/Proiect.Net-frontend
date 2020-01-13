import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalService } from './global-service.service';
import { Project } from '../models/CreateProjectModel';

@Injectable({
	providedIn: 'root'
})
export class CreateProjectService {
	constructor(private http: HttpClient, private globalService: GlobalService) {}
	postProject(project: Project) {
		let headers = this.globalService.headers;
		let resp = this.http.post(`${this.globalService.apiURL}/projects`, project, { headers });
		return resp;
	}
}
