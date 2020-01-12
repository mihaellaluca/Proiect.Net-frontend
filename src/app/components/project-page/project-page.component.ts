import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/models/CreateProjectModel';
import { ProjectTabService } from 'src/app/services/project-tab.service';
import { UserService } from 'src/app/services/user-service.service';
import { UserModel } from 'src/app/models/UserModel';
import { InvitationModel } from 'src/app/models/InvitationModel';
import { GlobalService } from 'src/app/services/global-service.service';
import { InvitationsService } from 'src/app/services/invitations.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
	selector: 'app-project-page',
	templateUrl: './project-page.component.html',
	styleUrls: [ './project-page.component.scss' ]
})
export class ProjectPageComponent implements OnInit {
	userId: string = localStorage.getItem('userId');
	projectId: string = ''; // trebuie luat din linkul curent. /project-page/projectId
	project: Project = new Project();
	neededTech: string[] = [];
	userIsOwner: boolean = false;
	collaborators: string[] = [];
	suggestedUsers: UserModel[];

	constructor(
		private projectService: ProjectTabService,
		private userService: UserService,
		private invitationService: InvitationsService,
		private globalService: GlobalService,
		private route: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit() {
		document.body.classList.add('bg-img-home');
		this.route.paramMap
			.pipe(switchMap((params: ParamMap) => params.get('id')))
			.subscribe((data) => (this.projectId += data));

		console.log('proiect id:', this.projectId);
		this.projectService.getProjectById(this.projectId).pipe().subscribe(
			(data) => {
				console.log('Project aaaaaaaa: ', data);

				for (var index in data[0].collaboratorsId) {
					this.userService.getUserById(data[0].collaboratorsId[index]).pipe().subscribe(
						(data) => {
							this.collaborators.push(data['firstName'] + ' ' + data['lastName']);
						},
						(error) => {
							console.log(error);
						}
					);
				}
				console.log('Colaboratori: ', this.collaborators);
				this.project = {
					projectId: data[0].id,
					name: data[0].name,
					ownerId: data[0].ownerId,
					ownerName: '',
					description: data[0].description,
					technologies: data[0].technologies,
					state: data[0].state
				};
				this.userService.getUserById(this.project.ownerId).pipe().subscribe(
					(data) => {
						this.project.ownerName = data['firstName'] + ' ' + data['lastName'];
					},
					(error) => {
						console.log(error);
					}
				);

				this.neededTech = this.project.technologies;

				this.userService.getSuggestedUsers(this.neededTech).pipe().subscribe(
					(data) => {
						console.log('Suggested users: ', data);
					},
					(error) => {
						console.log(error);
					}
				);

				this.checkUserIsOwner();
			},
			(error) => {
				console.log(error);
			}
		);
	}

	joinProject() {
		// add current user to project
		let invitation = new InvitationModel(
			this.projectId,
			localStorage.getItem('userId'),
			this.project.ownerId,
			this.globalService.InvitationUserToOwner
		);

		console.log(invitation);

		this.invitationService.joinProject(invitation).pipe().subscribe(
			(data) => {
				console.log('After: ', data);
			},
			(error) => {
				console.log(error);
			}
		);
	}

	checkUserIsOwner() {
		if (this.userId === this.project.ownerId) {
			this.userIsOwner = true;
		} else {
			this.userIsOwner = false;
		}
	}
}
