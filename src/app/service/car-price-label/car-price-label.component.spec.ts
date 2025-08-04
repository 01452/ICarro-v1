import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarPriceLabelComponent } from './car-price-label.component';

describe('CarPriceLabelComponent', () => {
  let component: CarPriceLabelComponent;
  let fixture: ComponentFixture<CarPriceLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarPriceLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarPriceLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
