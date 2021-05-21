import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftBottomComponent } from './left-bottom.component';

describe('LeftBottomComponent', () => {
  let component: LeftBottomComponent;
  let fixture: ComponentFixture<LeftBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftBottomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
