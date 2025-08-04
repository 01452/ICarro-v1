import {Component, Input, OnInit} from '@angular/core';
import {Car} from '../../cars/cars-http.service';

@Component({
  selector: 'car-price-label',
  templateUrl: './car-price-label.component.html',
  styleUrls: ['./car-price-label.component.scss']
})
export class CarPriceLabelComponent implements OnInit {
  @Input() car: Car;

  constructor() { }

  ngOnInit(): void {
  }

}
