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
		let resp = this.http.post(`${this.globalService.apiURL}/projects/invitations`, invitationModel);
		return resp;
	}
}
