import { Component, OnInit } from '@angular/core';
import { TehnologiiService } from '../../services/tehnologii.service';
import { TechItemModel } from '../../models/TechItemModel';
import { InitialService } from '../../services/initial.service';
import { Router } from '@angular/router';
@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: [ './register.component.scss' ]
})
export class RegisterComponent implements OnInit {
	email: string;
	password: string;
	nume: string;
	prenume: string;
	tech: string[];
	isValid: boolean = true;
	techKnown: string[] = [];

	constructor(private techFromServer: TehnologiiService, private initial: InitialService, private router: Router) {}

	ngOnInit() {
		document.body.classList.add('bg-img-sign');
		this.tech = this.techFromServer.getTehnologies();
	}
	manageTech(item: TechItemModel) {
		if (item.isChecked) this.techKnown.push(item.techItem);
		else this.techKnown = this.techKnown.filter((t) => t !== item.techItem);
	}
	onSubmit() {
		this.isValid = this.initial.registerUser(this.email, this.password);
		if (this.isValid) this.router.navigate([ 'login' ]);
	}
}
