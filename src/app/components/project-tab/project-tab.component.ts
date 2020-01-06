import { Component, OnInit, Input } from '@angular/core';
import { ProjectTabModel } from 'src/app/models/ProjectTabModel';
import { Project } from 'src/app/models/CreateProjectModel';

@Component({
	selector: 'app-project-tab',
	templateUrl: './project-tab.component.html',
	styleUrls: [ './project-tab.component.scss' ]
})
export class ProjectTabComponent implements OnInit {
	@Input() projectRecieved: Project;
	constructor() {}

	ngOnInit() {}
}
