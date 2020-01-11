import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataPlaceholder } from '../models/DataPlaceholder';
import { UserModel } from './../models/UserModel';
import { GlobalService } from './global-service.service';

@Injectable({
	providedIn: 'root'
})
export class InitialService {
	constructor(private httpClient: HttpClient, private globalService: GlobalService) {}

	registerUser(user: UserModel) {
		let headers = new HttpHeaders().set('Content-Type', 'application/json');
		console.log('USER: ', user);
		return this.httpClient.post(`${this.globalService.apiURL}/users`, user, { headers, responseType: 'text' });
	}
	loginUser(user: UserModel) {
		localStorage.setItem("jwt", "uniqueId");
		localStorage.setItem("time", "120");
		console.log('USER: ', user);
		return this.httpClient.post(`${this.globalService.apiURL}/Users/login`, user);
	}
}
