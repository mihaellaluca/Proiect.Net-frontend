import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user-service.service';
import { InvitationsService } from '../../services/invitations.service';

@Component({
	selector: 'app-invitation-card',
	template: `
  Say {{ message }}
`,
	templateUrl: './invitation-card.component.html',
	styleUrls: [ './invitation-card.component.scss' ]
})
export class InvitationCardComponent implements OnInit {
	@Input() card;
	name: string = '';
	technologies: string = '';
	constructor(private userService: UserService, private invitationService: InvitationsService) {}

	ngOnInit() {

		console.log(this.card);
		this.userService.getUserById(this.card.collaboratorId).pipe().subscribe(
			(data) => {
				console.log(data);
				this.name = data['firstName'] + ' ' + data['lastName'];
				data['knownTechnologies'].forEach((element) => {
					this.technologies = this.technologies + ' ' + element;
				});
			},
			(error) => {
				console.log(error);
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
			data => {
				console.log("Mergeeee", data);
				window.alert("Invitation handled!");
			},
			error => {
				console.error(error);
			}
		);
	}
}
