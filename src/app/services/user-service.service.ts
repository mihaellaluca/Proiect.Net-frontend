import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './global-service.service';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	constructor(private http: HttpClient, private globalService: GlobalService) {}

	getUserById(userId) {
		let headers = this.globalService.headers;
		return this.http.get(`${this.globalService.apiURL}/users/${userId}`, { headers });
	}

	getSuggestedUsers(neededTechnologies) {
		let headers = this.globalService.headers;
		var json = { NeededTechnologies: neededTechnologies };
		console.log('Needed tech: ', neededTechnologies, json);
		return this.http.post(`${this.globalService.apiURL}/users/suggestions`, json, { headers });
	}
}
