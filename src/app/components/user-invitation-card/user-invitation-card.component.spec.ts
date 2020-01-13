import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInvitationCardComponent } from './user-invitation-card.component';

describe('UserInvitationCardComponent', () => {
  let component: UserInvitationCardComponent;
  let fixture: ComponentFixture<UserInvitationCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInvitationCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInvitationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
