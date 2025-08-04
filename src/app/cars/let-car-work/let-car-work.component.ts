import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ImgurPhotoService} from '../imgur-photo.service';
import {Title} from '@angular/platform-browser';
import {FuelType} from '../fuel';
import {WheelsDriveTypes} from '../wheels-drive';
import {GearTypes} from '../gear-types';
import {Car, CarsHttpService, Place} from '../cars-http.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {DialogBuilder} from '../../service/dialog/dialog-builder';
import {AuthenticationError, AuthorizationError, BadRequestError, ConflictError, ConnectionError} from '../../errors';
import {finalize} from 'rxjs/operators';
import {
  clearFilesForSave,
  clearFromData,
  clearSavedAutocomplete,
  restoreAutocomplete, restoreFiles,
  restoreFormData,
  saveAutocomplete, saveFiles,
  saveFormData
} from '../../tools';
import {StaticLocationService} from '../../service/static-location.service';

interface CarFormResult {
  make: string;
  model: string;
  year: string;
  engine: string;
  fuel: string;
  gear: string;
  wheelsDrive: string;
  serialNumber: string;
  doors: number;
  seats: number;
  fuelConsumption: number;
  futures: string;
  carClass: string;
  price: number;
  about: string
  distance: number;
  pickUpPlace: string;
}


@Component({
  selector: 'app-let-car-work',
  templateUrl: './let-car-work.component.html',
  styleUrls: ['./let-car-work.component.scss'],
})
export class LetCarWorkComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('addressInput', {static: true}) addressInput: ElementRef;

  fuelTypes = FuelType.getFuels();
  wheelsDriveTypes = WheelsDriveTypes.getWheelsDrives();
  gearTypes = GearTypes.getGears();
  photoUrls: string[] = [];
  carDetailForm: FormGroup;
  features: string[] = [''];
  fileNames = 'Add photos of your car';
  addressText: string;
  photosUrlsMap: Map<File, string> = new Map<File, string>();
  photosProgressMap: Map<File, number> = new Map<File, number>();
  photoNamesMap: Map<File, string> = new Map<File, string>();
  loading = false;
  private url: string;
  private place: Place;
  places: any[] = [];

  constructor(private photoService: ImgurPhotoService, private formBuilder: FormBuilder, public title: Title,
              private httpService: CarsHttpService, private router: Router, private cd: ChangeDetectorRef, private dialog: MatDialog,
              private staticLocationService: StaticLocationService) {
  }

  ngOnDestroy(): void {
    this.carDetailForm.controls.pickUpPlace.setValue(this.addressInput.nativeElement.value);
    this.carDetailForm.controls.photos.setValue(null);
    saveFormData(this.carDetailForm, this.url);
    saveAutocomplete(this.place);
    saveFiles({
      photoNamesMap: this.photoNamesMap,
      photosProgressMap: this.photosProgressMap,
      photosUrlsMap: this.photosUrlsMap
    })
  }

  ngOnInit() {
    this.url = this.router.url;
    this.title.setTitle('Let the car work!');
    this.initForm();
    this.places = this.staticLocationService.getPlaces();
  }

  ngAfterViewInit() {
    this.addPickupPlaceValidator();
    this.cd.detectChanges();
  }

  uploadFiles(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      const photo = files.item(i);
      this.photosUrlsMap.set(photo, '');
      this.photosProgressMap.set(photo, 0);
      this.photoNamesMap.set(photo, photo.name);
      this.photoService.uploadPhoto(photo).subscribe(data => {
        if (data.uploaded) {
          this.photosUrlsMap.set(photo, data.data.data.link);
          this.photosProgressMap.delete(photo);
        } else {
          if (data.percentage) {
            this.photosProgressMap.set(photo, data.percentage);
          }
        }
      }, error => {
        this.photosProgressMap.delete(photo);
        this.photosUrlsMap.delete(photo);
        this.photoNamesMap.set(photo, `Not loaded: ${photo.name}`);
      });
    }
  }

  addCar() {
    const urls = Array.from(this.photosUrlsMap.values());
    if (urls.includes('')) {
      this.carDetailForm.controls.photos.setErrors({
        notLoaded: 'photos not loaded'
      });
      this.carDetailForm.controls.photos.updateValueAndValidity();
      return;
    }

    if (urls.length === 0) {
      this.carDetailForm.controls.photos.setErrors({
        required: 'Photos required'
      });
      this.carDetailForm.controls.photos.updateValueAndValidity();
      return;
    }
    const car = this.mapFormResultToCar(this.carDetailForm.value);
    this.loading = true;
    this.httpService.addCar(car)
      .pipe(finalize(() => this.loading = false))
      .subscribe(response => this.carAdded(response), error => this.showError(error));
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.carDetailForm.controls[controlName];
    return control.touched && control.invalid;
  }

  getErrors(controlName: string) {
    return this.carDetailForm.controls[controlName].errors;
  }

  removePhoto(file: File) {
    this.photosUrlsMap.delete(file);
    this.photosProgressMap.delete(file);
    this.photoNamesMap.delete(file);
  }


  isFormValid() {
    const urls = Array.from(this.photosUrlsMap.values());
    if (urls.includes('')) {
      this.carDetailForm.controls.photos.setErrors({
        notLoaded: 'photos not loaded'
      });
      this.carDetailForm.controls.photos.updateValueAndValidity();
      return false;
    }

    if (urls.length === 0) {
      this.carDetailForm.controls.photos.setErrors({
        required: 'Photos required'
      });
      this.carDetailForm.controls.photos.updateValueAndValidity();
      return false;
    }
    return this.carDetailForm.valid;
  }

  private showError(error) {
    if (error instanceof ConnectionError) {
      new DialogBuilder(this.dialog)
        .title('Connection error')
        .message('Check your connection and try again')
        .negativeBtn('Close')
        .positiveBtn('Try again', this.addCar.bind(this))
        .show();
    } else if (error instanceof AuthorizationError) {
      new DialogBuilder(this.dialog)
        .title('Authorization error')
        .message('You need login or register before rent car')
        .negativeBtn('Close')
        .neutralBtn('Registration', () => this.router.navigate(['/registration'],
          {queryParams: {url: decodeURI(this.router.url)}}
        ))
        .positiveBtn('Login', () => this.router.navigate(['/login'],
          {queryParams: {url: decodeURI(this.router.url)}}
        ))
        .show();
    } else if (error instanceof AuthenticationError) {
      new DialogBuilder(this.dialog)
        .title('Forbidden')
        .message('You cant add car from this account')
        .positiveBtn('Ok')
        .show();
    } else if (error instanceof BadRequestError) {
      new DialogBuilder(this.dialog)
        .title('Bad request')
        .message('Wrong car data')
        .positiveBtn('Ok')
        .show();
    } else if (error instanceof ConflictError) {
      new DialogBuilder(this.dialog)
        .title('Conflict')
        .message('Car with this serial number already exists')
        .positiveBtn('Ok')
        .show();
    } else {
      new DialogBuilder(this.dialog)
        .title('Something goes wrong')
        .positiveBtn('Try again', this.addCar.bind(this))
        .negativeBtn('Close')
        .show();
    }
  }

  private carAdded(car: Car) {
    this.carDetailForm.reset();
    this.photosUrlsMap = new Map<File, string>();
    this.photosProgressMap = new Map<File, number>();
    this.photoNamesMap = new Map<File, string>();
    this.place = null;
    this.addressText = '';
    clearFromData(this.url);
    clearSavedAutocomplete();
    clearFilesForSave();
    new DialogBuilder(this.dialog)
      .title('Car added')
      .message(`${car.make} ${car.model} added successful`)
      .positiveBtn('Show car', () => this.router.navigate(['car', car.serial_number]))
      .negativeBtn('Add another car', () => this.router.navigate(['let-car-work']))
      .neutralBtn('Search cars', () => this.router.navigate(['/']))
      .show();
  }

  private initForm() {
    const makeControl = new FormControl(null, Validators.required);
    const modelControl = new FormControl(null, Validators.required);
    const yearControl = new FormControl(null, [
      Validators.required,
      Validators.min(0),
      Validators.max(new Date().getFullYear())
    ]);
    const engineControl = new FormControl(null, Validators.required);
    const fuelControl = new FormControl(null, Validators.required);
    const gearControl = new FormControl(null, Validators.required);
    const wheelsDriveControl = new FormControl(null, Validators.required);
    const serialNumberControl = new FormControl(null, [Validators.required, Validators.maxLength(15)]);
    const doorsControl = new FormControl(null, [Validators.required, Validators.min(2), Validators.max(8)]);
    const seatsControl = new FormControl(null, [Validators.required, Validators.min(2), Validators.max(20)]);
    const fuelConsumptionControl = new FormControl(null, [Validators.required, Validators.min(0), Validators.max(100)]);
    const carClassControl = new FormControl(null, Validators.required);
    const pricePerDayControl = new FormControl(null, [Validators.required, Validators.min(0), Validators.max(1000)]);
    const aboutControl = new FormControl(null);
    const distanceIncludeControl = new FormControl(null, [Validators.required, Validators.min(0)]);
    const pickUpPlaceControl = new FormControl(null, {
      updateOn: 'blur'
    });
    const imagesControl = new FormControl(null);
    pickUpPlaceControl.setErrors({error: `wrong address`});
    this.carDetailForm = this.formBuilder.group({
      make: makeControl,
      model: modelControl,
      year: yearControl,
      engine: engineControl,
      fuel: fuelControl,
      gear: gearControl,
      wheelsDrive: wheelsDriveControl,
      serialNumber: serialNumberControl,
      doors: doorsControl,
      seats: seatsControl,
      fuelConsumption: fuelConsumptionControl,
      carClass: carClassControl,
      price: pricePerDayControl,
      about: aboutControl,
      distance: distanceIncludeControl,
      pickUpPlace: pickUpPlaceControl,
      photos: imagesControl
    });
    restoreFormData(this.carDetailForm, this.url);
    if (!this.addressText)
      this.addressText = this.carDetailForm.controls.pickUpPlace.value
    const files = restoreFiles();
    this.photosUrlsMap = files?.photosUrlsMap || new Map<File, string>();
    this.photosProgressMap = files?.photosProgressMap || new Map<File, number>();
    this.photoNamesMap = files?.photoNamesMap || new Map<File, string>();
  }

  private mapFormResultToCar: (value: CarFormResult) => Car =
    ({futures, pickUpPlace, wheelsDrive, serialNumber, fuelConsumption, carClass, distance, price, ...value}) => {
      return {
        ...value,
        price_per_day: price,
        distance_included: distance,
        serial_number: serialNumber,
        fuel_consumption: fuelConsumption,
        wheels_drive: wheelsDrive,
        car_class: carClass,
        image_url: Array.from(this.photosUrlsMap.values()),
        features: this.features,
        pick_up_place: this.place
      } as Car;
    };

  private addPickupPlaceValidator() {
    const control = this.carDetailForm.get('pickUpPlace');
    if (!this.place)
      control.setErrors({addressError: ''});

    control.valueChanges.subscribe(value => {
      const selectedPlace = this.places.find(place => place.formatted_address === value);
      if (selectedPlace) {
        this.place = {
          longitude: selectedPlace.longitude,
          latitude: selectedPlace.latitude,
          place_id: selectedPlace.place_id
        };
        this.addressText = selectedPlace.formatted_address;
        control.setErrors(null);
        this.cd.detectChanges();
      } else if (!this.place) {
        control.setErrors({addressError: ''});
      }
    });
  }

  onPlaceSelect(place: any) {
    this.place = {
      longitude: place.longitude,
      latitude: place.latitude,
      place_id: place.place_id
    };
    this.addressText = place.formatted_address;
    this.carDetailForm.get('pickUpPlace').setValue(place.formatted_address);
    this.carDetailForm.get('pickUpPlace').setErrors(null);
    this.cd.detectChanges();
  }

  get files() {
    return Array.from(this.photoNamesMap.keys());
  }
}
