import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-users-suggestions',
  templateUrl: './users-suggestions.component.html',
  styleUrls: ['./users-suggestions.component.scss']
})
export class UsersSuggestionsComponent implements OnInit {

  @Input() card;
	name: string = '';
  technologies: string = '';
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    console.log("THIS.CARD:",this.card);
		this.userService.getUserById(this.card.userId).pipe().subscribe(
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
