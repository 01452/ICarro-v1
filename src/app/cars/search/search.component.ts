import {ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {SatDatepickerRangeValue} from 'saturn-datepicker';
import {Title} from '@angular/platform-browser';
import {CarsHttpService} from '../cars-http.service';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {DatesRangeValidator} from '../dates-range-validator';
import {mapDate, restoreCityValue, restoreFormData, saveCityValue, saveFormData} from '../../tools';
import {StaticLocationService} from '../../service/static-location.service';

interface SearchRequest {
  city: string;
  dates: SatDatepickerRangeValue<Date>;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  @ViewChild('cityInput', {static: true}) cityInput: ElementRef;
  private url = 'search';
  private cityValue: string;
  cities: any[] = [];

  constructor(private datePipe: DatePipe, private router: Router, private title: Title, private formBuilder: FormBuilder,
              private staticLocationService: StaticLocationService) {
  }

  minStartDate: Date = new Date();
  searchForm: FormGroup;
  maxDate: Date = new Date(this.minStartDate.getTime() + 31536000000);

  ngOnInit() {
    this.title.setTitle('Search');
    this.initSearchForm();
    this.cities = this.staticLocationService.getCities();
    this.addCityValidator();
  }

  ngOnDestroy(): void {
    this.searchForm.controls.city.setValue(this.cityInput.nativeElement.value);
    saveFormData(this.searchForm, this.url);
    saveCityValue(this.cityValue);
  }

  search(request: SearchRequest) {
    const searchParams: NavigationExtras = {
      queryParams: {
        city: this.cityValue,
        startDate: mapDate(request.dates.begin),
        endDate: mapDate(request.dates.end)
      }
    };
    this.router.navigate(['/search/results'], searchParams).then();
  }

  private initSearchForm() {
    const cityControl = new FormControl(null, Validators.required);
    const datesControl = new FormControl(null, [Validators.required, DatesRangeValidator.validator]);
    this.searchForm = this.formBuilder.group({
      city: cityControl,
      dates: datesControl
    });
    restoreFormData(this.searchForm, this.url);
    const value = this.searchForm.controls.dates.value;
    if (value) {
      this.searchForm.controls.dates.setValue({
        begin: new Date(value.begin),
        end: new Date(value.end),
      })
    }
    this.cityValue = restoreCityValue();
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.searchForm.controls[controlName];
    return control?.touched && control?.invalid;
  }

  getErrors(controlName: string) {
    return this.searchForm.controls[controlName]?.errors;
  }

  private addCityValidator() {
    const control = this.searchForm.get('city');
    if (!this.cityValue)
      control.setErrors({addressError: ''});

    control.valueChanges.subscribe(value => {
      const selectedCity = this.cities.find(city => city.name === value || city.short_name === value);
      if (selectedCity) {
        this.cityValue = selectedCity.short_name;
        control.setErrors(null);
      } else if (!this.cityValue) {
        control.setErrors({addressError: ''});
      }
    });
  }

  onCitySelect(city: any) {
    this.cityValue = city.short_name;
    this.searchForm.get('city').setValue(city.name);
    this.searchForm.get('city').setErrors(null);
  }
}
