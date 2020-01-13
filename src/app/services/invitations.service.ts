import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './global-service.service';
import { InvitationModel } from '../models/InvitationModel';

@Injectable({
	providedIn: 'root'
})
export class InvitationsService {
	constructor(private http: HttpClient, private globalService: GlobalService) {}
	joinProject(invitationModel: InvitationModel) {
		let headers = this.globalService.headers;
		let resp = this.http.post(`${this.globalService.apiURL}/projects/invitations`, invitationModel, { headers });
		return resp;
	}
	getUserInvitations() {
		let headers = this.globalService.headers;
		let resp = this.http.get(
			`${this.globalService.apiURL}/projects/invitations/${localStorage.getItem('userId')}`,
			{ headers }
		);
		return resp;
	}
}
