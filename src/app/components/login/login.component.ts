import { Component, OnInit } from '@angular/core';
import { InitialService } from '../../services/initial.service';
import { Router } from '@angular/router';
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {
	email: string;
	password: string;
	check: boolean = true;
	constructor(private initial: InitialService, private router: Router) {}

	ngOnInit() {
		document.body.classList.add('bg-img-sign');
	}

	onSubmit() {
		console.log(this.email);
		this.check = this.initial.loginUser(this.email, this.password);
		console.log(this.check);
		if (this.check) this.router.navigate([ '' ]);
	}
}
