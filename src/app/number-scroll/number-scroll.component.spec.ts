import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberScrollComponent } from './number-scroll.component';

describe('NumberScrollComponent', () => {
  let component: NumberScrollComponent;
  let fixture: ComponentFixture<NumberScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberScrollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
