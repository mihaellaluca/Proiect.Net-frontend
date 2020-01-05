import { Injectable } from '@angular/core';
import { ProjectTabModel } from '../models/ProjectTabModel';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './global-service.service';

@Injectable({
	providedIn: 'root'
})
export class ProjectTabService {
	descriere: string = 'O descriere super fabuloasa si foarte lunga O descriere super fabuloasa si foarte lunga O descriere super fabuloasa si foarte lunga O descriere super fabuloasa si foarte lunga O descriere super fabuloasa si foarte lunga O descriere super fabuloasa si foarte lunga O descriere super fabuloasa si foarte lunga O descriere super fabuloasa si foarte lunga O descriere super fabuloasa si foarte lunga O descriere super fabuloasa si foarte lunga';
	constructor(private http: HttpClient, private globalService: GlobalService) {}
	//GET pt proiecte
	getProjects() {
		let projects = this.http.get(`${this.globalService.apiURLP}/projects`).pipe().subscribe(
			(data) => {
				console.log(data);
			},
			(error) => {
				console.error(error);
			}
		);

		return [
			new ProjectTabModel('swa2', 'Electric', 'Buraga', this.descriere, [
				'.Net',
				'JavaScript',
				'Node.js',
				'Angular',
				'Vue',
				'Express',
				'MongoDb'
			]),
			new ProjectTabModel('swa2', 'Electric', 'Buraga', this.descriere, [ '.Net', 'JavaScript', 'Node.js' ]),
			new ProjectTabModel('swa2', 'Electric', 'Buraga', this.descriere, [ '.Net', 'JavaScript', 'Node.js' ]),
			new ProjectTabModel('swa2', 'Electric', 'Buraga', this.descriere, [ '.Net', 'JavaScript', 'Node.js' ]),
			new ProjectTabModel('swa2', 'Electric', 'Buraga', this.descriere, [ '.Net', 'Java', 'Node.js' ]),
			new ProjectTabModel('swa2', 'Electric', 'Buraga', this.descriere, [ '.Net', 'Java', 'Node.js' ]),
			new ProjectTabModel('swa2', 'Electric', 'Buraga', this.descriere, [ '.Net', 'Java', 'Node.js' ]),
			new ProjectTabModel('swa2', 'Electric', 'Buraga', this.descriere, [ '.Net', 'Java', 'Node.js' ]),
			new ProjectTabModel('swa2', 'Electric', 'Buraga', this.descriere, [ '.Net', 'Java', 'Node.js' ]),
			new ProjectTabModel('swa2', 'Electric', 'Buraga', this.descriere, [ '.Net', 'Java', 'Node.js' ]),
			new ProjectTabModel('swa2', 'Electric', 'Buraga', this.descriere, [ '.Net', 'Java', 'Node.js' ]),
			new ProjectTabModel('swa2', 'Electric', 'Buraga', this.descriere, [ '.Net', 'Java', 'Node.js' ]),
			new ProjectTabModel('swa2', 'Electric', 'Buraga', this.descriere, [ '.Net', 'Java', 'Node.js' ]),
			new ProjectTabModel('swa2', 'Electric', 'Buraga', this.descriere, [ '.Net', 'Java', 'Node.js' ]),
			new ProjectTabModel('swa2', 'Electric', 'Buraga', this.descriere, [ '.Net', 'Java', 'Node.js' ]),
			new ProjectTabModel('swa2', 'Electric', 'Buraga', this.descriere, [ '.Net', 'Java', 'Node.js' ]),
			new ProjectTabModel('swa2', 'Electric', 'Buraga', this.descriere, [ '.Net', 'Java', 'Node.js' ]),
			new ProjectTabModel('swa2', 'Electrik', 'Buraga', this.descriere, [ '.Net', 'Java', 'Node.js' ]),
			new ProjectTabModel('swa2', 'Electrik', 'Buraga', this.descriere, [ '.Net', 'Java', 'Node.js' ]),
			new ProjectTabModel('swa2', 'Electrik', 'Buraga', this.descriere, [ '.Net', 'JavaScript', 'Node.js' ]),
			new ProjectTabModel('swa2', 'Electrik', 'Buraga', this.descriere, [ '.Net', 'Java', 'Node.js' ]),
			new ProjectTabModel('swa2', 'Electrik', 'Buraga', this.descriere, [ '.Net', 'Java', 'Node.js' ]),
			new ProjectTabModel('swa2', 'Electrik', 'Buraga', this.descriere, [ '.Net', 'Java', 'Node.js' ]),
			new ProjectTabModel('swa2', 'Electrik', 'Buraga', this.descriere, [ '.Net', 'Java', 'Node.js' ]),
			new ProjectTabModel('swa2', 'Electrik', 'Buraga', this.descriere, [ '.Net', 'Java', 'Node.js' ]),
			new ProjectTabModel('swa2', 'Electrik', 'Buraga', this.descriere, [ '.Net', 'Java', 'Node.js' ]),
			new ProjectTabModel('swa2', 'Electrik', 'Buraga', this.descriere, [ '.Net', 'Java', 'Node.js' ]),
			new ProjectTabModel('swa2', 'Electrik', 'Buraga', this.descriere, [ '.Net', 'Java', 'Node.js' ]),
			new ProjectTabModel('swa2', 'Electrik', 'Buraga', this.descriere, [ '.Net', 'Java', 'Node.js' ]),
			new ProjectTabModel('swa2', 'Electrik', 'Buraga', this.descriere, [ '.Net', 'Java', 'Node.js' ]),
			new ProjectTabModel('swa2', 'Electrik', 'Buraga', this.descriere, [ '.Net', 'Java', 'Node.js' ]),
			new ProjectTabModel('swa2', 'Electrik', 'Buraga', this.descriere, [ '.Net', 'Java', 'Node.js' ]),
			new ProjectTabModel('swa2', 'Electrik', 'Buraga', this.descriere, [ '.Net', 'Java', 'Node.js' ]),
			new ProjectTabModel('swa2', 'Electrik', 'Buraga', this.descriere, [ '.Net', 'Java', 'Node.js' ]),
			new ProjectTabModel('swa2', 'Electrik', 'Buraga', this.descriere, [ '.Net', 'Java', 'Node.js' ]),
			new ProjectTabModel('swa2', 'Electrik', 'Buraga', this.descriere, [ '.Net', 'Java', 'Node.js' ]),
			new ProjectTabModel('swa2', 'Electrik', 'Buraga', this.descriere, [ '.Net', 'Java', 'Node.js' ]),
			new ProjectTabModel('swa2', 'Electrik', 'Buraga', this.descriere, [ '.Net', 'Java', 'Node.js' ]),
			new ProjectTabModel('swa2', 'Electrik', 'Buraga', this.descriere, [ '.Net', 'Java', 'Node.js' ]),
			new ProjectTabModel('swa2', 'Electrik', 'Buraga', this.descriere, [ '.Net', 'Java', 'Node.js' ]),
			new ProjectTabModel('swa2', 'Electrik', 'Buraga', this.descriere, [ '.Net', 'Java', 'Node.js' ]),
			new ProjectTabModel('swa2', 'Electrik', 'Buraga', this.descriere, [ '.Net', 'Java', 'Node.js' ]),
			new ProjectTabModel('swa2', 'Electrik', 'Buraga', this.descriere, [ '.Net', 'Java', 'Node.js' ])
		];
	}
}
