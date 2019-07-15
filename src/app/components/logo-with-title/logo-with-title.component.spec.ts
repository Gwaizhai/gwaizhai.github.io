import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoWithTitleComponent } from './logo-with-title.component';

describe('LogoWithTitleComponent', () => {
  let component: LogoWithTitleComponent;
  let fixture: ComponentFixture<LogoWithTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoWithTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoWithTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
