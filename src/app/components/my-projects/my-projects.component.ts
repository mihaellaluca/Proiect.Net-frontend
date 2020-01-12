import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyProjectsService } from 'src/app/services/my-projects.service';
import { MyRequestsAsOwnerService } from 'src/app/services/my-requests-as-owner.service';

@Component({
  selector: 'app-my-projects',
  template : `<app-invitation-card [cardInfos]="cardInfos"></app-invitation-card>`,
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent implements OnInit {

  myProjects: string[];
  myContributions: string[];
  cardInfos;
  requests: string[];
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private myProjectsService: MyProjectsService, private myRequestsAsOwnerService: MyRequestsAsOwnerService  ) { }

  ngOnInit() {

this.myProjectsService.getMyProjects().pipe().subscribe(
  (data) => {
   // console.log('Data::', data);
    this.myProjects = data[0];
    this.myContributions = data[1];
   // this.tech = Object.keys(data).map((i) => data[i]).map((x) => x.name);

  },
  (error) => {
    console.error(error.error);
  }
);
this.myRequestsAsOwnerService.getMyRequestsAsOwner().pipe().subscribe(
  (data) => {
   console.log('Data::', data);
   this.cardInfos = data;
  },
  (error) => {
    console.error(error.error);
  }
);
  }

}
