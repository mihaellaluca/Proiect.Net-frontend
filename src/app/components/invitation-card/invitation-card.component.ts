import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user-service.service';

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
	constructor(private userService: UserService) {}

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
				console.log('plpl');
			}
		);
	}
}
