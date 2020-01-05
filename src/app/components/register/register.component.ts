import { Component, OnInit } from '@angular/core';
import { TehnologiiService } from '../../services/tehnologii.service';
import { TechItemModel } from '../../models/TechItemModel';
import { InitialService } from '../../services/initial.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: [ './register.component.scss' ]
})
export class RegisterComponent implements OnInit {
	tech: string[];
	isValid: boolean = true;
	KnownTechnologies: string[] = [];
	registerForm: FormGroup;

	constructor(
		private techFromServer: TehnologiiService,
		private initial: InitialService,
		private router: Router,
		private formBuilder: FormBuilder
	) {}

	ngOnInit() {
		document.body.classList.remove('bg-img-home');
		document.body.classList.add('bg-img-sign');

		this.techFromServer.getTehnologies().pipe().subscribe(
			(data) => {
				//console.log('Data::', data);

				this.tech = Object.keys(data).map((i) => data[i]).map((x) => x.name);
			},
			(error) => {
				console.error(error.error);
			}
		);
		this.registerForm = this.formBuilder.group({
			firstName: [ '', Validators.required ],
			lastName: [ '', Validators.required ],
			username: [ '', Validators.required ],
			email: [ '', Validators.required ],
			password: [ '', Validators.required ],
			KnownTechnologies: [ this.KnownTechnologies ]
		});
		//	console.log('Form:::: ', this.registerForm);
	}

	manageTech(item: TechItemModel) {
		if (item.isChecked) this.KnownTechnologies.push(item.techItem);
		else this.KnownTechnologies = this.KnownTechnologies.filter((t) => t !== item.techItem);
	}

	onSubmit() {
		if (this.registerForm.invalid) {
			console.log('Formularul nu respecta validarile');
			return;
		}
		this.initial.registerUser(this.registerForm.value).pipe().subscribe(
			(data) => {
				console.log('Data:::', data);
				this.router.navigate([ 'login' ]);
			},
			(error) => {
				console.error(error.error);
			}
		);
		// if (this.isValid) this.router.navigate(["login"]);
	}
}
