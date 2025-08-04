import {TestBed} from '@angular/core/testing';

import {Car, CarsHttpService, URL} from './cars-http.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {DatePipe} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {LocalStoreService} from '../local-store.service';
import {AppModule} from '../app.module';

describe('CarsHttpService', () => {
  let service: CarsHttpService;
  let http: HttpTestingController;

  const carRequest: Car = {
    serial_number: '123-67-123',
    make: 'Audi',
    model: 'A6',
    year: '2012',
    engine: '3.0L V6 DOHC 24V AWD',
    fuel: 'Gas',
    gear: 'Automatic',
    wheels_drive: 'RWD',
    doors: 4,
    seats: 5,
    fuel_consumption: 12.5,
    features: [],
    car_class: 'C',
    price_per_day: 43.5,
    distance_included: 20,
    about: 'string',
    pick_up_place: {
      place_id: 'string',
      latitude: 31.912363,
      longitude: 34.8047923
    },
    image_url: [
      'https://a.d-cd.net/4e0c9b9s-1920.jpg',
      'https://a.d-cd.net/3c0c9b9s-1920.jpg'
    ]
  };

  const carExpectResponse: Car = {
    serial_number: '123-67-123',
    make: 'Audi',
    model: 'A6',
    year: '2012',
    engine: '3.0L V6 DOHC 24V AWD',
    fuel: 'Gas',
    gear: 'Automatic',
    wheels_drive: 'RWD',
    doors: 4,
    seats: 5,
    fuel_consumption: 12.5,
    features: [],
    car_class: 'C',
    price_per_day: 43.5,
    distance_included: 20,
    about: 'string',
    pick_up_place: {
      place_id: 'string',
      latitude: 31.912363,
      longitude: 34.8047923
    },
    image_url: [
      'https://a.d-cd.net/4e0c9b9s-1920.jpg',
      'https://a.d-cd.net/3c0c9b9s-1920.jpg'
    ],
    owner: {
      first_name: 'Brian',
      second_name: 'O\'Conner',
      registration_date: '2019-09-14'
    },
    booked_periods: []
  };


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CarsHttpService, DatePipe]
    });
    service = TestBed.inject(CarsHttpService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    http.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send one POST request and receive response', (done) => {
    service.addCar(carRequest).subscribe(carResponse => {
      expect(carResponse).toEqual(carExpectResponse);
      done();
    });
    const req = http.expectOne(`${URL}/car`);
    expect(req.request.method).toEqual('POST');
    req.flush(carExpectResponse);
  });

  it('should send one POST request and receive error car already exists', (done) => {
    service.addCar(carRequest).subscribe(carResponse => {
    }, error => {
      expect(error).toEqual('Conflict');
      done();
    });
    const req = http.expectOne(`${URL}/car`);
    expect(req.request.method).toEqual('POST');
    req.flush('Conflict', {status: 409, statusText: 'Conflict'});
  });
});

describe('CarHttpService API', () => {
  let service: CarsHttpService;
  let localStore: LocalStoreService;

  const carRequest: Car = {
    serial_number: '787-83-2',
    make: 'Ford',
    model: 'T',
    year: '1918',
    engine: '3.0L V6 DOHC 24V AWD',
    fuel: 'Gas',
    gear: 'Automatic',
    wheels_drive: 'RWD',
    doors: 4,
    seats: 5,
    fuel_consumption: 70,
    features: [],
    car_class: 'C',
    price_per_day: 17.5,
    distance_included: 20,
    about: 'test',
    pick_up_place: {
      place_id: 'ChIJu46S-ZZhLxMROG5lkwZ3D7k',
      latitude: 41.9,
      longitude: 12.5
    },
    image_url: [
      'https://assets.catawiki.nl/assets/2017/11/16/4/3/d/43d109f1-0383-4114-b836-cce47b850922.jpg',
      'https://a.d-cd.net/3c0c9b9s-1920.jpg'
    ]
  };


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, AppModule],
      providers: [CarsHttpService, DatePipe]
    });
    service = TestBed.inject(CarsHttpService);
    localStore = TestBed.inject(LocalStoreService);
  });

  afterEach(() => localStore.deleteToken());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send one POST request and receive authentication error', (done) => {
    service.addCar(carRequest).subscribe(carResponse => {
    }, error => {
      expect(error).toEqual('Authentication error');
      done();
    });
  });

  it('should send one POST request and receive car already exists error', async (done) => {
    localStore.saveToken(`Basic ${btoa('e10102000g@gmail.com:10102000')}`);
    service.addCar(carRequest).subscribe(carResponse => {
    }, error => {
      expect(error).toEqual('Conflict');
      done();
    });
  });

  it('should send one POST request and receive car bad request error', async (done) => {
    localStore.saveToken(`Basic ${btoa('e10102000g@gmail.com:10102000')}`);
    service.addCar(null).subscribe(carResponse => {
    }, error => {
      expect(error).toEqual('Bad request');
      done();
    });
  });

  it('should send one POST request and receive success response', async (done) => {
    localStore.saveToken(`Basic ${btoa('e10102000g@gmail.com:10102000')}`);
    const car: Car = {
      ...carRequest,
      serial_number: `${Math.floor(Math.random() * 100000) + 100000}`,
      pick_up_place: {
        place_id: 'ChIJu46S-ZZhLxMROG5lkwZ3D7k',
        latitude: 41.9 + Math.floor(Math.random() * 0.01),
        longitude: 12.5 + Math.floor(Math.random() * 0.01)
      }
    };
    const carResponse: Car = {
      ...car,
      owner: {
        first_name: 'Yegor',
        second_name: 'Ivlev',
        registration_date: '2020-03-12'
      },
      booked_periods: []
    };
    service.addCar(car).subscribe(carRes => {
      expect(carRes).toEqual(carResponse);
      done();
    });
  });


});
