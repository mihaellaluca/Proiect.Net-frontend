import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user-service.service';
import { InvitationModel } from 'src/app/models/InvitationModel';
import { GlobalService } from 'src/app/services/global-service.service';
import { Router } from '@angular/router';
import { InvitationsService } from 'src/app/services/invitations.service';

@Component({
  selector: 'app-users-suggestions',
  templateUrl: './users-suggestions.component.html',
  styleUrls: ['./users-suggestions.component.scss']
})
export class UsersSuggestionsComponent implements OnInit {

  @Input() card;
	name: string = '';
  technologies: string = '';
  
  constructor(private userService: UserService, private globalService: GlobalService,private invitationService: InvitationsService, private router: Router) { }

  ngOnInit() {
		this.userService.getUserById(this.card.userId).pipe().subscribe(
			(data) => {
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

  sendInvitation() {
    
    let invite = new InvitationModel(
			this.router.url.split('/')[2],//projectId
		  this.card.userId,//cui trimit inv id
			localStorage.getItem('userId'), //ownerId
			this.globalService.InvitationOwnerToUser
		);
    this.invitationService.joinProject(invite).pipe().subscribe(
      data => {
        window.alert("Your invitation has been send succesfully.");
      },
      error => {
        console.log(error);
      }
    );
  }

}
