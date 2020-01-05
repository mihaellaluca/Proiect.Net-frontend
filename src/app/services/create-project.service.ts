import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './global-service.service';
import { Project } from '../models/CreateProjectModel';

@Injectable({
	providedIn: 'root'
})
export class CreateProjectService {
	constructor(private http: HttpClient, private globalService: GlobalService) {}
	postProject(project: Project) {
		let resp = this.http.post(`${this.globalService.apiURLP}/projects`, project);
		return resp;
	}
}
