import {Component, OnInit} from '@angular/core';
import {Car, CarsHttpService, Comment} from '../cars-http.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-special-offers',
  templateUrl: './special-offers.component.html',
  styleUrls: ['./special-offers.component.scss']
})
export class SpecialOffersComponent implements OnInit {
  cars: Observable<Car[]>;
  comments: Observable<Comment[]>;

  constructor(private httpService: CarsHttpService) {
  }

  ngOnInit() {
    this.cars = this.httpService.getBestCars();
    this.comments = this.httpService.getLatestComments();
  }
}
