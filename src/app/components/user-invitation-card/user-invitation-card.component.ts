import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user-service.service';
import { InvitationsService } from 'src/app/services/invitations.service';

@Component({
	selector: 'app-user-invitation-card',
	templateUrl: './user-invitation-card.component.html',
	styleUrls: [ './user-invitation-card.component.scss' ]
})
export class UserInvitationCardComponent implements OnInit {
	@Input() card;
	name: string = '';
	technologies: string = '';
	constructor(private userService: UserService, private invitationService: InvitationsService) {}

	ngOnInit() {
		console.log('DATA PRIMITA BAAA::::');
		console.log(this.card.ownerId);
		this.userService.getUserById(this.card.ownerId).pipe().subscribe(
			(data) => {
				console.log('DATA PRIMITA BAAA::::');
				this.name = data['firstName'] + ' ' + data['lastName'];
				data['knownTechnologies'].forEach((element) => {
					this.technologies = this.technologies + ' ' + element;
				});
			},
			(error) => {
				console.error(error);
			}
		);
	}
	handleInvitation(accepted) {
		var handleInvitationModel = {
			ProjectId: this.card.projectId,
			CollaboratorId: this.card.collaboratorId,
			OwnerId: this.card.ownerId,
			Accepted: accepted
		};
		this.invitationService.handleInvitation(handleInvitationModel).pipe().subscribe(
			(data) => {
				console.log('Mergeeee', data);
				window.alert('Invitation handled!');
			},
			(error) => {
				console.error(error);
			}
		);
	}
}
