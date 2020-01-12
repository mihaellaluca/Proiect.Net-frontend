import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GlobalService } from './global-service.service';

@Injectable({
	providedIn: 'root'
})
export class MyRequestsAsOwnerService {
	constructor(private http: HttpClient, private globalService: GlobalService) {}
	getMyRequestsAsOwner() {
		const resp = this.http.get(`${this.globalService.apiURL}/projects/requests/${localStorage.getItem('userId')}`);
		return resp;
	}
}
