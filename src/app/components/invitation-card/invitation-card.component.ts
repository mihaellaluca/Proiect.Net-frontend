import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-invitation-card',
  template: `
  Say {{ message }}
`,
  templateUrl: './invitation-card.component.html',
  styleUrls: ['./invitation-card.component.scss']
})
export class InvitationCardComponent implements OnInit {

  @Input() card: string;

  constructor() { }

  ngOnInit() {
    console.log(this.card);
  }

}
