import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataPlaceholder } from '../models/DataPlaceholder';
@Injectable({
	providedIn: 'root'
})
export class InitialService {
	usersPlaceholder: DataPlaceholder[] = [ { email: 'abc@da.com', password: '123' } ];
	constructor() {}

	registerUser(recievedEmail: string, recievedPassword: string) {
		//POST request to server (placeholder)
		if (recievedEmail === undefined || recievedPassword === undefined) return false;
		else {
			this.usersPlaceholder.push({ email: recievedEmail, password: recievedPassword });
			return true;
		}
	}
	loginUser(recievedEmail: string, recievedPassword: string): boolean {
		//GET request to server
		//should return true if found or false if not found
		//if found will set the jwt and time in localStorage

		let check: DataPlaceholder = { email: recievedEmail, password: recievedPassword };
		let found: boolean = false;
		this.usersPlaceholder.forEach((element) => {
			if (element.email === check.email && element.password === check.password) {
				localStorage.setItem('jwt', 'uniqueId');
				localStorage.setItem('time', '120');
				found = true;
			}
		}, found);
		return found;
	}
}
