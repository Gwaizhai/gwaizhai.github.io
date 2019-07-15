import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupTermsComponent } from './signup-terms.component';

describe('SignupTermsComponent', () => {
  let component: SignupTermsComponent;
  let fixture: ComponentFixture<SignupTermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupTermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
