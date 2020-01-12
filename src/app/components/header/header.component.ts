import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit {
	isLogged: boolean = false;
	bool: boolean = true;
	userId: string;
	constructor(private router: Router) {}

	ngOnInit() {
		if (localStorage.getItem('userId') !== null) {
			this.isLogged = true;
			this.userId = localStorage.getItem('userId');
		}
	}

	Logout() {
		localStorage.clear();
		this.router.navigate([ 'login' ]);
		this.isLogged = false;
	}
}
