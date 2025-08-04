import {async, ComponentFixture, fakeAsync, inject, TestBed, tick} from '@angular/core/testing';

import {LetCarWorkComponent} from './let-car-work.component';
import {HttpClientModule} from '@angular/common/http';
import {ServiceModule} from '../../service/service.module';
import {ImgurPhotoService} from '../imgur-photo.service';
import {interval, of, throwError} from 'rxjs';
import {take} from 'rxjs/operators';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {SharedModule} from '../../shared/shared.module';
import moment, {Moment} from 'moment';
import {Car} from '../cars-http.service';

describe('LetCarWorkComponent', () => {
  let component: LetCarWorkComponent;
  let fixture: ComponentFixture<LetCarWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LetCarWorkComponent],
      imports: [HttpClientModule, ServiceModule, MatDatepickerModule, SharedModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetCarWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title "Let car work!"', () => {
    expect(component.title.getTitle()).toEqual('Let the car work!');
  });

  it('should make fake upload files and add links to array', inject([ImgurPhotoService], fakeAsync((photoService: ImgurPhotoService) => {
    const files = new TestFileList() as any as FileList;
    spyOn(photoService, 'uploadPhoto').and.returnValue(of(
      {
        uploaded: false,
        percentage: 0
      },
      {
        uploaded: false,
        percentage: 50
      },
      {
        uploaded: false,
        percentage: 100
      },
      {
        uploaded: true,
        data: {
          data: {
            id: 'VhDEaat',
            title: null,
            description: null,
            datetime: 1583944675,
            type: 'image\/png',
            animated: false,
            width: 48,
            height: 48,
            size: 2323,
            views: 0,
            bandwidth: 0,
            vote: null,
            favorite: false,
            nsfw: null,
            section: null,
            account_url: null,
            account_id: 0,
            is_ad: false,
            in_most_viral: false,
            has_sound: false,
            tags: [],
            ad_type: 0,
            ad_url: '',
            edited: '0',
            in_gallery: false,
            deletehash: 'JHiXmH3n0jdjPrI',
            name: '',
            link: 'https:\/\/i.imgur.com\/VhDEaat.png'
          }, success: true, status: 200
        }
      }
      ));
    component.uploadFiles(files);
    tick(3000);
    expect(component.photosUrlsMap.size).toEqual(files.length);
  })));

  it('should upload files and add links to array', async (done: DoneFn) => {
    const files = new TestFileList() as any as FileList;
    component.uploadFiles(files);
    await waitUntil(() => component.photoUrls.length === files.length);
    expect(component.photosUrlsMap.size).toEqual(files.length);
    done();
  });

  it('should make fake upload files and throw error', inject([ImgurPhotoService], fakeAsync((photoService: ImgurPhotoService) => {
    const files = new TestFileList([null, null]) as any as FileList;
    const spyShowError = spyOn(component, 'showError');
    spyOn(photoService, 'uploadPhoto').and.returnValue(throwError('Bad image'));
    component.uploadFiles(files);
    tick(3000);
    expect(spyShowError).toHaveBeenCalled();
  })));

  it('should try upload files and throw error', async (done: DoneFn) => {
    const files = new TestFileList([null, null]) as any as FileList;
    const spyShowError = spyOn(component, 'showError');
    component.uploadFiles(files);
    await new Promise(resolve => setTimeout(resolve, 2000));
    expect(spyShowError).toHaveBeenCalled();
    done();
  });

  it('should init form', () => {
    expect(component.carDetailForm).not.toBeUndefined();
  });

  it('should inject addressInput element from html to ts', () => {
    expect(component.addressInput).not.toBeUndefined();
  });
  it('should init autocomplete', () => {
    expect(component.autocomplete).not.toBeUndefined();
  });

  it('should convert result of form to car', () => {
    const formResult = {
      make: 'Ford',
      model: 'T',
      year:'1918',
      engine: '2.9 L inline 4-cylinder',
      fuel: 'Gas',
      gear: 'AT',
      wheelsDrive: 'FWD',
      serialNumber: 'AA-123-45',
      doors: 5,
      seats: 5,
      fuelConsumption: 23.3,
      futures: 'feature',
      carClass: 'C',
      price: 34.4,
      about: 'The best car in 1918',
      distance: 233,
      pickUpPlace: 'place'
    };
    const expectValue: Car = {
      make: 'Ford',
      model: 'T',
      year: '1918',
      engine: '2.9 L inline 4-cylinder',
      fuel: 'Gas',
      gear: 'AT',
      wheels_drive: 'FWD',
      serial_number: 'AA-123-45',
      doors: 5,
      seats: 5,
      fuel_consumption: 23.3,
      features: undefined,
      car_class: 'C',
      price_per_day: 34.4,
      about: 'The best car in 1918',
      distance_included: 233,
      pick_up_place: {
        place_id: undefined,
        latitude: undefined,
        longitude: undefined
      },
      image_url: []
    };
    expect(component.mapFormResultToCar(formResult)).toEqual(expectValue);
  });

  it('should parse address data to Place object', () => {
    expect(component['getPlace']()).not.toBeUndefined();
  });

  it('should validate uploadphoto', async () => {
    expect(component.isControlInvalid('photos')).toBeFalse();
    component.carDetailForm.get('photos').markAsTouched();
    expect(component.isControlInvalid('photos')).toBeTrue();
    const files = new TestFileList() as any as FileList;
    component.uploadFiles(files);
    await waitUntil(() => component.photoUrls.length === files.length);
    expect(component.isControlInvalid('photos')).toBeFalse();
  });

  it('should validate address', async () => {
    expect(component.isControlInvalid('pickUpPlace')).toBeFalse();
    component.carDetailForm.get('pickUpPlace').markAsTouched();
    expect(component.isControlInvalid('pickUpPlace')).toBeTrue();

    spyOn(component.autocomplete, 'getPlace').and.returnValue({name: ''});
    google.maps.event.trigger(component.autocomplete, 'place_changed');
    await new Promise(resolve => setTimeout(resolve, 1000));
    fixture.detectChanges();
    expect(component.isControlInvalid('pickUpPlace')).toBeFalse();
  });
});


export const waitUntil = async (untilTruthy: () => boolean): Promise<boolean> => {
  while (!untilTruthy()) {
    await interval(25).pipe(take(1)).toPromise();
  }
  return Promise.resolve(true);
};

class TestFileList {
  files: Array<File>;

  get length() {
    return this.files?.length;
  }

  constructor(elements?) {
    this.files = new Array<File>();
    if (!elements) {
      for (let i = 0; i < 1; i++) {
        const content = 'R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
        const file = new File([this.dataURItoBlob(content)], 'file.gif', {type: 'image/gif'});
        this.files.push(file);
      }
    } else {
      this.files.push(elements);
    }
  }

  item(index: number): File {
    return this.files[index];
  }

  private dataURItoBlob(dataURI) {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    return new Blob([int8Array], {type: 'image/jpeg'});
  }

}
