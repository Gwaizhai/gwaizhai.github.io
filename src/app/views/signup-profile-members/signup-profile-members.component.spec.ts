import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupProfileMembersComponent } from './signup-profile-members.component';

describe('SignupProfileMembersComponent', () => {
  let component: SignupProfileMembersComponent;
  let fixture: ComponentFixture<SignupProfileMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupProfileMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupProfileMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
