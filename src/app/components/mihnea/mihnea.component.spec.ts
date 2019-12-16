import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MihneaComponent } from './mihnea.component';

describe('MihneaComponent', () => {
  let component: MihneaComponent;
  let fixture: ComponentFixture<MihneaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MihneaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MihneaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
