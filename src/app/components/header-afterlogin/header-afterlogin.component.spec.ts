import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAfterloginComponent } from './header-afterlogin.component';

describe('HeaderAfterloginComponent', () => {
  let component: HeaderAfterloginComponent;
  let fixture: ComponentFixture<HeaderAfterloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderAfterloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderAfterloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
