import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {Car, CarsHttpService, SearchCarRequest} from '../cars-http.service';
import {DecimalPipe} from '@angular/common';
import {finalize} from 'rxjs/operators';
import {AuthorizationError, ConnectionError, NotFoundError} from '../../errors';
import {DialogBuilder} from '../../service/dialog/dialog-builder';
import {MatDialog} from '@angular/material/dialog';
import {StaticLocationService} from '../../service/static-location.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],

})
export class MapComponent implements OnInit {
  showLoading = true;
  @ViewChild('mapContainer', {static: true}) mapContainer: ElementRef;
  params: SearchCarRequest;
  cars: Car[] = [];


  constructor(private route: ActivatedRoute, private http: CarsHttpService, private router: Router, private decimalPipe: DecimalPipe,
              private dialog: MatDialog, private staticLocationService: StaticLocationService) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.params = Object.assign({}, params);
      this.loadCars();
    });
  }

  private loadCars() {
    this.showLoading = true;
    this.http.getAllCars(this.params)
      .pipe(finalize(() => this.showLoading = false))
      .subscribe(cars => this.onCarsLoaded(cars), this.onError.bind(this));
  }

  private onCarsLoaded(cars: Car[]) {
    this.cars = cars;
  }

  private onError(error) {
    if (error instanceof ConnectionError) {
      new DialogBuilder(this.dialog)
        .title('Connection error')
        .message('Check your connection and try again')
        .negativeBtn('Close')
        .positiveBtn('Try again', this.loadCars.bind(this))
        .show();
    } else {
      new DialogBuilder(this.dialog)
        .title('Something goes wrong')
        .positiveBtn('Try again',  this.loadCars.bind(this))
        .negativeBtn('Close')
        .show();
    }
  }

  navigateToCar(car: Car) {
    const searchParams: NavigationExtras = {
      queryParams: {
        startDate: this.params.startDate,
        endDate: this.params.endDate
      }
    };
    this.router.navigate(['/car', car.serial_number], searchParams).then();
  }
}
