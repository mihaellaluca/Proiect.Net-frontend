import { Injectable } from '@angular/core';
import { ProjectTabModel } from '../models/ProjectTabModel';

@Injectable({
	providedIn: 'root'
})
export class ProjectTabService {
	descriere: string = 'O descriere super fabuloasa si foarte lunga O descriere super fabuloasa si foarte lunga O descriere super fabuloasa si foarte lunga O descriere super fabuloasa si foarte lunga O descriere super fabuloasa si foarte lunga O descriere super fabuloasa si foarte lunga O descriere super fabuloasa si foarte lunga O descriere super fabuloasa si foarte lunga O descriere super fabuloasa si foarte lunga O descriere super fabuloasa si foarte lunga';
	constructor() {}
	//GET pt proiecte
	getProjects() {
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
