import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgDisplayComponent } from './msg-display.component';

describe('MsgDisplayComponent', () => {
  let component: MsgDisplayComponent;
  let fixture: ComponentFixture<MsgDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsgDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
