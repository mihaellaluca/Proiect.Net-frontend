import { Component, OnInit } from '@angular/core';
import { TehnologiiService } from 'src/app/services/tehnologii.service';
import { TechItemModel } from 'src/app/models/TechItemModel';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-create-project',
	templateUrl: './create-project.component.html',
	styleUrls: [ './create-project.component.scss' ]
})
export class CreateProjectComponent implements OnInit {
	createProjectForm: FormGroup;
	tech: string[];
	KnownTechnologies: string[] = [];
	constructor(private techService: TehnologiiService, private formBuilder: FormBuilder) {}

	ngOnInit() {
		document.body.classList.add('bg-img-home');
		this.techService.getTehnologies().pipe().subscribe(
			(data) => {
				//console.log('Data::', data);

				this.tech = Object.keys(data).map((i) => data[i]).map((x) => x.name);
			},
			(error) => {
				console.error(error.error);
			}
		);
		this.createProjectForm = this.formBuilder.group({
			projectName: [ '', Validators.required ],
			projectDescription: [ '', Validators.required ],
			projectNonTechnicalRequirements: [ '', Validators.required ],
			KnownTechnologies: [ this.KnownTechnologies ]
		});
	}
	manageTech(item: TechItemModel) {
		if (item.isChecked) this.KnownTechnologies.push(item.techItem);
		else this.KnownTechnologies = this.KnownTechnologies.filter((t) => t !== item.techItem);
	}
	onSubmit() {
		console.log(this.createProjectForm.value);
	}
}
