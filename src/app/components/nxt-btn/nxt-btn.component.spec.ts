import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NxtBtnComponent } from './nxt-btn.component';

describe('NxtBtnComponent', () => {
  let component: NxtBtnComponent;
  let fixture: ComponentFixture<NxtBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NxtBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NxtBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
