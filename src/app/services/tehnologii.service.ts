import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './global-service.service';

@Injectable({
	providedIn: 'root'
})
export class TehnologiiService {
	constructor(private http: HttpClient, private globalService: GlobalService) {}
	getTehnologies() {
		let tech = this.http.get(`${this.globalService.apiURL}/users/data=technologies`);
		return tech;
	}
}
