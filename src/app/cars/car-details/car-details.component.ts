import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Car, CarsHttpService,} from '../cars-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {DatePipe, DecimalPipe, Location} from '@angular/common';
import {Title} from '@angular/platform-browser';
import {SatDatepickerRangeValue} from 'saturn-datepicker';
import {LocalStoreService} from '../../local-store.service';
import {DatesRangeValidator} from '../dates-range-validator';
import {ConnectionError, NotFoundError} from '../../errors';
import {DialogBuilder} from '../../service/dialog/dialog-builder';
import {compareDates, restoreFormData, saveFormData} from '../../tools';
import {ReserveDialogBuilder} from '../../service/reserve-modal/reserve-modal.component';
import {LoginRegistrationModalComponent} from '../../service/login-registration-modal/login-registration-modal.component';
import {StaticLocationService} from '../../service/static-location.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss'],
})
export class CarDetailsComponent implements OnInit, OnDestroy {

  car: Car;
  private serialNumber: string;
  minStartDate = new Date();
  address: string[];
  filter;
  formattedAddress: string;
  reserveForm: FormGroup;
  maxDate: Date = new Date(this.minStartDate.getTime() + 31536000000);
  private url: string;


  constructor(private route: ActivatedRoute, private httpService: CarsHttpService, private dialog: MatDialog,
              private datePipe: DatePipe, private router: Router, private decimalPipe: DecimalPipe, private title: Title,
              private formBuilder: FormBuilder, public localStore: LocalStoreService, private location: Location,
              private staticLocationService: StaticLocationService) {

  }

  ngOnDestroy(): void {
    saveFormData(this.reserveForm, this.url);
  }

  ngOnInit() {
    this.url = this.router.url;
    this.route.params.subscribe(params => this.serialNumber = params.id);
    this.initForm();
    this.route.queryParams.subscribe(param => {
      if (param.startDate && param.endDate) {
        this.reserveForm.get('dates').setValue({
          begin: new Date(param.startDate),
          end: new Date(param.endDate)
        });
      } else {
        restoreFormData(this.reserveForm, this.url);
      }
    });

    this.loadCar();
  }

  getErrors(control: string) {
    return this.reserveForm.controls[control].errors;
  }

  showDialog() {
    if (this.localStore.getToken()) {
      new ReserveDialogBuilder(this.dialog)
        .car(this.car)
        .dateStart(this.reserveForm.controls.dates.value.begin)
        .dateEnd(this.reserveForm.controls.dates.value.end)
        .show();
    } else {
      this.dialog.open(LoginRegistrationModalComponent);
    }
  }

  private initForm() {
    const datesControl = new FormControl(null,
      [Validators.required]);
    this.reserveForm = this.formBuilder.group({
      dates: datesControl
    });
  }

  private loadCar() {
    this.httpService.getCar(this.serialNumber)
      .subscribe(car => this.carLoaded(car),
        this.showError.bind(this));
  }

  private showError(error) {
    if (error instanceof ConnectionError) {
      new DialogBuilder(this.dialog)
        .title('Connection error')
        .message('Check your connection and try again')
        .negativeBtn('Close')
        .positiveBtn('Try again', this.loadCar.bind(this))
        .show();
    } else if (error instanceof NotFoundError) {
      new DialogBuilder(this.dialog)
        .title('Car not found')
        .message('Car not found')
        .positiveBtn('Go to previous page', this.location.back)
        .positiveBtn('Search', () => this.router.navigate(['/search']))
        .show();
    } else {
      new DialogBuilder(this.dialog)
        .title('Something goes wrong')
        .positiveBtn('Try again', this.loadCar.bind(this))
        .negativeBtn('Close')
        .show();
    }
  }

  private carLoaded(car: Car) {
    this.car = car;
    this.setTitle(car);
    this.initFilter(car);
    this.setCarMarker(car);
    this.setLocation(car);
    const validator = this.reserveForm.controls.dates.validator;
    this.reserveForm.controls.dates.setValidators([validator, this.createBookedPeriodValidator(this.car)]);
  }

  private setTitle(car: Car) {
    this.title.setTitle(`${car.make} ${car.model} ${car.year}`);
  }

  private initFilter(car: Car) {
    this.filter = (d: Date): boolean => {
      let valid = true;
      car.booked_periods.forEach(bookedPeriod => {
        const dateStart = new Date(bookedPeriod.start_date_time);
        const dateEnd = new Date(bookedPeriod.end_date_time);
        if (dateStart.getTime() <= d.getTime() && d.getTime() <= dateEnd.getTime()) {
          valid = false;
        }
      });
      return valid;
    };
  }

  private setCarMarker(car: Car) {
    // Car marker functionality replaced with static data
    // Car location: lat ${car.pick_up_place.latitude}, lng ${car.pick_up_place.longitude}
  }

  private setLocation(car: Car) {
    // Use static location data instead of PlacesService
    const staticPlace = this.staticLocationService.getPlaces()[0];
    this.address = staticPlace.formatted_address.split(',');
    this.formattedAddress = staticPlace.formatted_address;
  }


  private createBookedPeriodValidator(car: Car): ValidatorFn {
    return (control: FormControl) => {
      const dates: SatDatepickerRangeValue<Date> = control.value;
      if (car) {
        for (const bookedPeriod of this.car.booked_periods) {
          const startBook = new Date(bookedPeriod.start_date_time);
          const endBook = new Date(bookedPeriod.end_date_time);
          if (
            // endBook >= begin >= startBook
            compareDates(dates?.begin, startBook) && compareDates(endBook, dates?.begin)
            // endBook >= end >= startBook
            || compareDates(dates?.end, startBook) && compareDates(endBook, dates?.end)
            // end >= startBook >= begin
            || compareDates(startBook, dates?.begin) && compareDates(dates?.end, startBook)
            // end >= endBook >= begin
            || compareDates(endBook, dates?.begin) && compareDates(dates?.end, endBook))
            return {
              bookPeriod: 'Book period cant contain already booked dates'
            };
        }
      }
      return null;
    };
  }
}
