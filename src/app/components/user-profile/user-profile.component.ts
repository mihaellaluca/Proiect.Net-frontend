import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { UserService } from 'src/app/services/user-service.service';

import { ThrowStmt } from '@angular/compiler';
import { UserProfileModel } from 'src/app/models/UserProfileModel';
@Component({
	selector: 'app-user-profile',
	templateUrl: './user-profile.component.html',
	styleUrls: [ './user-profile.component.scss' ]
})
export class UserProfileComponent implements OnInit {
	user: UserProfileModel = new UserProfileModel();
	constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {}

	ngOnInit() {
		let user = this.route.paramMap.pipe(
			switchMap((params: ParamMap) => this.userService.getUserById(params.get('id')))
		);
		user.pipe().subscribe(
			(data) => {
				console.log(data);
				this.user.Id = data['id'];
				this.user.FirstName = data['firstName'];
				this.user.LastName = data['lastName'];
				this.user.Email = data['email'];
				this.user.Technologies = data['knownTechnologies'];
			},
			(error) => {
				console.error(error);
			}
		);
	}
}
