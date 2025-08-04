import {Component, Input, OnInit} from '@angular/core';
import {Car} from '../../cars/cars-http.service';

@Component({
  selector: 'car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit {

  @Input() car: Car;

  constructor() {
  }

  ngOnInit(): void {
  }

}
