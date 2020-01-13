import { Component, OnInit, Input } from '@angular/core';
import { ProjectTabModel } from 'src/app/models/ProjectTabModel';
import { Project } from 'src/app/models/CreateProjectModel';
import { InvitationModel } from 'src/app/models/InvitationModel';
import { InvitationsService } from 'src/app/services/invitations.service';
import { GlobalService } from 'src/app/services/global-service.service';

@Component({
	selector: 'app-project-tab',
	templateUrl: './project-tab.component.html',
	styleUrls: [ './project-tab.component.scss' ]
})
export class ProjectTabComponent implements OnInit {
	@Input() projectRecieved;
	userIsOwner: boolean = false;
	constructor(private invitationService: InvitationsService, private globalService: GlobalService) {}

	ngOnInit() {
		this.checkUserIsOwner();
	}
	sendInvite() {
		console.log(this.projectRecieved);
		let invite = new InvitationModel(
			this.projectRecieved.id,
			localStorage.getItem('userId'),
			this.projectRecieved.ownerId,
			this.globalService.InvitationUserToOwner
		);
		console.log(invite);
		this.invitationService.joinProject(invite).pipe().subscribe(
			(data) => {
				console.log(data);
			},
			(error) => {
				console.error(error);
			}
		);
	}
	checkUserIsOwner(){
		console.log("userId", localStorage.getItem('userId'), "===",this.projectRecieved.ownerId);
		if(localStorage.getItem('userId') === this.projectRecieved.id) {
			this.userIsOwner = true;
			
		}
		else {
			this.userIsOwner = false;
		}
	}
}
