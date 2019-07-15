import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearlySignupComponent } from './nearly-signup.component';

describe('NearlySignupComponent', () => {
  let component: NearlySignupComponent;
  let fixture: ComponentFixture<NearlySignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearlySignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearlySignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
