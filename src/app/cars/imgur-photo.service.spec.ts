import {TestBed} from '@angular/core/testing';

import {ImgurPhotoService} from './imgur-photo.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {last} from 'rxjs/operators';

describe('ImgurPhotoService', () => {
  let service: ImgurPhotoService;
  let http: HttpTestingController;

  const sendData = {
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
  };

  const response = {
    uploaded: true,
    data: sendData
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [ImgurPhotoService]
    });
    http = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ImgurPhotoService);
  });

  afterEach(() => http.verify());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should make one POST request`, (done: DoneFn) => {
    service.uploadPhoto(null).pipe(last())
      .subscribe(data => {
        expect(data).toEqual(response);
        done();
      });
    const req = http.expectOne(service.URL);
    expect(req.request.method).toEqual('POST');
    req.flush(sendData);
  });

  it('should throw error of wrong file', (done: DoneFn) => {
    service.uploadPhoto(null).subscribe(data => {

    }, error => {
      expect(error).toEqual('Bad image');
      done();
    });
    const req = http.expectOne(service.URL);
    expect(req.request.method).toEqual('POST');
    req.flush('Bad request', {status: 400, statusText: 'Bad request'});
  });

  it('should throw error og bad connection', (done: DoneFn) => {
    service.uploadPhoto(null).subscribe(data => {

    }, error => {
      expect(error).toEqual('Connection error, try again');
      done();
    });

    const req = http.expectOne(service.URL);
    expect(req.request.method).toEqual('POST');
    req.error(new ErrorEvent('Network problem'));
  });
});

describe('ImgurPhotoService API test', () => {
  let service: ImgurPhotoService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [ImgurPhotoService]
    });
    http = TestBed.inject(HttpClient);
    service = TestBed.inject(ImgurPhotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should make one POST request`, (done: DoneFn) => {
    const content = 'R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
    const file = new File([dataURItoBlob(content)], 'file.gif', {type: 'image/gif'});
    service.uploadPhoto(file)
      .pipe(last())
      .subscribe(data => {
        expect(data.uploaded).toBeTrue();
        expect(data.data.data.link).toBeInstanceOf(String);
        done();
      });
  });

  it('should throw error of wrong file', (done: DoneFn) => {
    service.uploadPhoto(null).subscribe(data => {

    }, error => {
      expect(error).toEqual('Bad image');
      done();
    });
  });
});

function dataURItoBlob(dataURI) {
  const byteString = window.atob(dataURI);
  const arrayBuffer = new ArrayBuffer(byteString.length);
  const int8Array = new Uint8Array(arrayBuffer);
  for (let i = 0; i < byteString.length; i++) {
    int8Array[i] = byteString.charCodeAt(i);
  }
  return new Blob([int8Array], {type: 'image/jpeg'});
}
