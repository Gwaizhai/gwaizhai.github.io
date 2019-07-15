import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupTabViewComponent } from './signup-tab-view.component';

describe('SignupTabViewComponent', () => {
  let component: SignupTabViewComponent;
  let fixture: ComponentFixture<SignupTabViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupTabViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupTabViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
