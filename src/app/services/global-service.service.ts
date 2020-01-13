import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class GlobalService {
	constructor() {}

	apiURL: string = 'http://localhost:5600/v1';
	InvitationUserToOwner: number = 1;
	InvitationOwnerToUser: number = 0;
	headers = new HttpHeaders().set('Authorization', 'Bearer' + ' ' + localStorage.getItem('jwt'));
}
