import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupInterestsComponent } from './signup-interests.component';

describe('SignupInterestsComponent', () => {
  let component: SignupInterestsComponent;
  let fixture: ComponentFixture<SignupInterestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupInterestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupInterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
