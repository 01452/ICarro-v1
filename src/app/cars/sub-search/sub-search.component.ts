import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Options} from '@m0t0r/ngx-slider';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CarsHttpService, SearchCarRequest} from '../cars-http.service';
import {DatesRangeValidator} from '../dates-range-validator';
import {StaticLocationService} from '../../service/static-location.service';

@Component({
  selector: 'app-sub-search',
  templateUrl: './sub-search.component.html',
  styleUrls: ['./sub-search.component.scss']
})
export class SubSearchComponent implements OnInit {

  @ViewChild('cityInput', {static: true}) cityInput: ElementRef;
  cities: any[] = [];

  minStartDate: Date = new Date();
  options: Options;
  routeParams: SearchCarRequest = {};
  searchForm: FormGroup;
  maxDate: Date = new Date(this.minStartDate.getTime() + 31536000000);

  constructor(private router: Router, private datePipe: DatePipe, private formBuilder: FormBuilder,
              private route: ActivatedRoute, private httpService: CarsHttpService, private staticLocationService: StaticLocationService) {
  }

  ngOnInit() {
    this.initSearchForm();
    this.cities = this.staticLocationService.getCities();
    this.route.queryParams.subscribe(params => {
      const city = params.city;
      this.routeParams = Object.assign({}, params);
      this.setSearchFormValues();
      const minMaxPromise = this.httpService.getMaxAndMinPrices({
        city
      });
      minMaxPromise.then(minMaxValues => {
        if (minMaxValues.max !== -1 && minMaxValues.min !== -1) {
          const newOptions: Options = Object.assign({}, this.options);
          newOptions.floor = Math.floor(minMaxValues.min);
          newOptions.ceil = Math.ceil(minMaxValues.max);
          const values = [];
          values[0] = Math.floor(this.routeParams.minAmount || minMaxValues.min);
          values[1] = Math.ceil(this.routeParams.maxAmount || minMaxValues.max);
          this.options = newOptions;
          this.searchForm.controls.priceRange.setValue(values);
        }
      });
    });
  }

  search() {
    this.routeParams = this.mapFormToRouteParams(this.searchForm.value);
    const searchParams: NavigationExtras = {
      queryParams: this.routeParams
    };
    this.router.navigate(['/search/results'], searchParams).then();
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.searchForm.controls[controlName];
    return control.touched && control.invalid;
  }

  getErrors(controlName: string) {
    return this.searchForm.controls[controlName].errors;
  }


  private mapDate(date: Date): string {
    return this.datePipe.transform(date, 'yyyy-MM-dd HH:mm');
  }

  private initSearchForm() {
    const datesControl = new FormControl(null, [Validators.required, DatesRangeValidator.validator]);
    const sortByControl = new FormControl();
    const priceSliderControl = new FormControl();
    const cityControl = new FormControl();
    this.searchForm = this.formBuilder.group({
      dates: datesControl,
      ascending: sortByControl,
      priceRange: priceSliderControl,
      city: cityControl
    });
  }

  private setSearchFormValues() {
    this.searchForm.controls.dates.setValue({
      begin: new Date(this.routeParams.startDate),
      end: new Date(this.routeParams.endDate)
    });
    this.searchForm.controls.ascending.setValue(this.routeParams.ascending || 'true');
    const min = this.routeParams.minAmount || 0;
    const max = this.routeParams.maxAmount || 100;
    this.searchForm.controls.priceRange.setValue([
      parseInt('' + min, 10), parseInt('' + max, 10) // min and max converts to string without this parse
    ]);
    this.searchForm.controls.city.setValue(this.routeParams.city);
  }

  private mapFormToRouteParams =
    ({dates, priceRange, city, ...value}) => {
      let resCity;
      let minAmount = priceRange[0];
      let maxAmount = priceRange[1];
      if (city === '') {
        resCity = '';
      } else {
        const selectedCity = this.cities.find(c => c.name === city || c.short_name === city);
        if (selectedCity) {
          resCity = selectedCity.short_name;
        } else {
          resCity = this.routeParams.city;
        }
      }
      if (resCity !== this.routeParams.city) {
        minAmount = null;
        maxAmount = null;
      }
      return {
        ...value,
        startDate: this.mapDate(dates.begin),
        endDate: this.mapDate(dates.end),
        minAmount,
        maxAmount,
        city: resCity
      };
    };

  onCitySelect(city: any) {
    this.searchForm.get('city').setValue(city.name);
  }
}
