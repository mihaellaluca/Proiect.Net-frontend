import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class GlobalService {
	constructor() {}

	apiURL: string = 'http://localhost:5600/v1';
	InvitationUserToOwner: number = 1;
	InvitationOwnerToUser: number = 0;
}
