import { Injectable } from '@angular/core';
import { ProjectTabModel } from '../models/ProjectTabModel';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './global-service.service';
import { Project } from '../models/CreateProjectModel';

@Injectable({
	providedIn: 'root'
})
export class ProjectTabService {
	project: Project;
	projects: Project[] = [];

	constructor(private http: HttpClient, private globalService: GlobalService) {}
	// get all projects
	getProjects() {
		let headers = this.globalService.headers;
		this.projects = [];
		this.http.get(`${this.globalService.apiURL}/projects`, { headers }).pipe().subscribe(
			(data) => {
				Object.keys(data).map((i) => data[i]).forEach((element) => {
					this.http
						.get(`${this.globalService.apiURL}/users/${element.ownerId}`, { headers })
						.pipe()
						.subscribe(
							(data) => {
								element.ownerName = `${data['firstName']} ${data['lastName']}`;
								this.projects.push(element);
							},
							(error) => {
								console.error(error);
							}
						);
				});
			},
			(error) => {
				console.error(error);
			}
		);
		return this.projects;
	}

	// get project by id
	getProjectById(projectId) {
		let headers = this.globalService.headers;
		return this.http.get(`${this.globalService.apiURL}/projects/${projectId}`, { headers });
	}
}
