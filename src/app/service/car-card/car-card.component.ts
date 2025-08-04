import {Component, Input, OnInit} from '@angular/core';
import {Car} from '../../cars/cars-http.service';

@Component({
  selector: 'car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss']
})
export class CarCardComponent implements OnInit {

  @Input('car') car: Car;

  constructor() { }

  ngOnInit(): void {
  }

}
