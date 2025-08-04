import {Component, OnInit} from '@angular/core';
import {CarsHttpService, Filter, Model, SearchCarRequest} from '../cars-http.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FuelType} from '../fuel';
import {WheelsDriveTypes} from '../wheels-drive';
import {GearTypes} from '../gear-types';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})

export class FiltersComponent implements OnInit {

  fuelTypes = FuelType.getFuels();
  wheelsDriveTypes = WheelsDriveTypes.getWheelsDrives();
  gearTypes = GearTypes.getGears();
  filters: Filter[];
  routeParams: SearchCarRequest = {};
  filtersForm: FormGroup;

  constructor(private httpService: CarsHttpService, private route: ActivatedRoute, private router: Router,
              private formBuilder: FormBuilder) {
  }

  async ngOnInit() {
    this.initFiltersForm();
    this.filters = await this.httpService.getFilters().toPromise();
    this.filters.sort((a, b) => a.make.localeCompare(b.make));
    this.filters.forEach(value => value.models.sort((a, b) => a.model.localeCompare(b.model)));
    this.route.queryParams.subscribe(params => {
      this.routeParams = Object.assign({}, params);
      this.updateForm();
    });
  }

  search() {
    this.routeParams = {...this.routeParams, ...this.filtersForm.value};
    this.routeParams.currentPage = 0;
    const searchParams: NavigationExtras = {
      queryParams: this.routeParams
    };
    this.router.navigate(['search/results'], searchParams).then();
  }

  private initFiltersForm() {
    const makeControl = new FormControl();
    const modelControl = new FormControl();
    const fuelControl = new FormControl();
    const yearControl = new FormControl(null, [
      Validators.max(new Date().getFullYear()),
      Validators.min(1885)
    ]);
    const gearControl = new FormControl();
    const wheelsDriveControl = new FormControl();
    makeControl.valueChanges.subscribe(value => {
      if (value) {
        modelControl.enable();
      } else {
        modelControl.disable();
      }
    });
    this.filtersForm = this.formBuilder.group({
      make: makeControl,
      model: modelControl,
      year: yearControl,
      fuel: fuelControl,
      gear: gearControl,
      wheelsDrive: wheelsDriveControl
    });
  }

  private updateForm() {
    this.filtersForm.get('make').setValue(this.routeParams.make);
    this.filtersForm.get('model').setValue(this.routeParams.model);
    this.filtersForm.get('year').setValue(this.routeParams.year);
    this.filtersForm.get('fuel').setValue(this.routeParams.fuel);
    this.filtersForm.get('gear').setValue(this.routeParams.gear);
    this.filtersForm.get('wheelsDrive').setValue(this.routeParams.wheelsDrive);
  }

  getModels(make: string): Model [] | undefined {
    return this.filters?.find(value => value.make === make)?.models;
  }
}
