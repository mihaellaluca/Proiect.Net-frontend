import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { UserService } from 'src/app/services/user-service.service';

import { ThrowStmt } from '@angular/compiler';
import { UserProfileModel } from 'src/app/models/UserProfileModel';
import { MyProjectsService } from 'src/app/services/my-projects.service';
import { InvitationsService } from 'src/app/services/invitations.service';
@Component({
	selector: 'app-user-profile',
	templateUrl: './user-profile.component.html',
	styleUrls: [ './user-profile.component.scss' ]
})
export class UserProfileComponent implements OnInit {
	user: UserProfileModel = new UserProfileModel();
	projects: string[];
	cardInfos;
	loggedUser = localStorage.getItem('userId');
	currentUser = '';

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private userService: UserService,
		private myProjectService: MyProjectsService,
		private invitationService: InvitationsService
	) {}

	ngOnInit() {
		this.currentUser = this.router.url.split('/')[2];
		let user = this.route.paramMap.pipe(
			switchMap((params: ParamMap) => this.userService.getUserById(params.get('id')))
		);
		user.pipe().subscribe(
			(data) => {
				//console.log(data);
				this.user.Id = data['id'];
				this.user.FirstName = data['firstName'];
				this.user.LastName = data['lastName'];
				this.user.Email = data['email'];
				this.user.Technologies = data['knownTechnologies'];
				this.myProjectService.getMyProjects().pipe().subscribe(
					(data) => {
						this.projects = data[0];
					},
					(error) => {
						console.log(error);
					}
				);
			},
			(error) => {
				console.error(error);
			}
		);
		this.invitationService.getUserInvitations().pipe().subscribe((data) => {
			this.cardInfos = data;
		});
	}
}
