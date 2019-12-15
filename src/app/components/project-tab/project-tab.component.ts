import { Component, OnInit, Input } from '@angular/core';
import { ProjectTabModel } from 'src/app/models/ProjectTabModel';

@Component({
	selector: 'app-project-tab',
	templateUrl: './project-tab.component.html',
	styleUrls: [ './project-tab.component.scss' ]
})
export class ProjectTabComponent implements OnInit {
	@Input() projectRecieved: ProjectTabModel;
	constructor() {}

	ngOnInit() {}
}
