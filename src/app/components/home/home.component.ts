import { Component, OnInit } from '@angular/core';
import { ProjectTabService } from 'src/app/services/project-tab.service';
import { ProjectTabModel } from 'src/app/models/ProjectTabModel';
import { TechItemModel } from 'src/app/models/TechItemModel';
import { TehnologiiService } from 'src/app/services/tehnologii.service';
import { Project } from 'src/app/models/CreateProjectModel';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {
	projects: Project[];
	projectsFiltered: Project[];
	tech: string[];
	KnownTechnologies: string[] = [];
	searchText: string = '';
	constructor(private projectTabService: ProjectTabService, private techService: TehnologiiService) {}

	ngOnInit() {
		document.body.classList.remove('bg-img-sign');
		document.body.classList.add('bg-img-home');
		this.projects = [];
		this.projects = this.projectTabService.getProjects();

		this.techService.getTehnologies().pipe().subscribe(
			(data) => {
				//console.log('Data::', data);

				this.tech = Object.keys(data).map((i) => data[i]).map((x) => x.name);
			},
			(error) => {
				console.error(error.error);
			}
		);
		this.projectsFiltered = this.projects;
	}

	manageTech(item: TechItemModel) {
		if (item.isChecked) this.KnownTechnologies.push(item.techItem);
		else this.KnownTechnologies = this.KnownTechnologies.filter((t) => t !== item.techItem);
		this.applyFilters();
	}
	applyFilters() {
		this.projectsFiltered = this.projects;
		this.projectsFiltered = this.projectsFiltered.filter(
			(project) =>
				project.name.toLowerCase().includes(this.searchText.toLowerCase().trim()) ||
				project.ownerName.toLowerCase().includes(this.searchText.toLowerCase().trim())
		);
		this.projectsFiltered = this.projectsFiltered.filter((projectTab) => {
			let ok = 1;
			this.KnownTechnologies.forEach((e) => {
				if (projectTab.technologies.includes(e) === false) ok = 0;
			}, ok);
			if (ok === 1) return true;
			else return false;
		});
	}
}
