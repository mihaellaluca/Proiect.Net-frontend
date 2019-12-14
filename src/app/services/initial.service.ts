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
	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
		})
	};

	constructor(private httpClient: HttpClient, private globalService: GlobalService) {}

	registerUser(user: UserModel) {
		console.log('USER: ', user);
		return this.httpClient.post(`${this.globalService.apiURL}/users`, user, this.httpOptions);
	}
	loginUser(user: UserModel) {
		// localStorage.setItem("jwt", "uniqueId");
		// localStorage.setItem("time", "120");
		console.log('USER: ', user);
		return this.httpClient.post(`${this.globalService.apiURL}/Users/login`, user);
	}
}
