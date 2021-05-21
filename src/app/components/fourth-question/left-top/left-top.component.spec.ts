import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftTopComponent } from './left-top.component';

describe('LeftTopComponent', () => {
  let component: LeftTopComponent;
  let fixture: ComponentFixture<LeftTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
