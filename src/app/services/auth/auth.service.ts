import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor() {}
	isAuthenticated(): boolean {
		const token = localStorage.getItem('jwt');
		//placeholder pt checku adevarat
		if (token === null) return false;
		else return true;
	}
}
