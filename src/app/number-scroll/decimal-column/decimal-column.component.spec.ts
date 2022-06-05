import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecimalColumnComponent } from './decimal-column.component';

describe('DecimalColumnComponent', () => {
  let component: DecimalColumnComponent;
  let fixture: ComponentFixture<DecimalColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecimalColumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecimalColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
