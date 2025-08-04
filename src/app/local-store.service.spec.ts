import {TestBed} from '@angular/core/testing';

import {LocalStoreService} from './local-store.service';

const TOKEN = 'TOKEN';
const NAME = 'NAME';
const LAST_NAME = 'LAST_NAME';
const EMAIL = 'EMAIL';
const PHONE = 'PHONE';

describe('LocalStoreService', () => {
  let service: LocalStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStoreService);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should save, get and remove token', () => {
    const value = 'test-token';
    service.saveToken(value);
    expect(localStorage.getItem(TOKEN) === value).toBeTrue();
    expect(service.getToken() === value).toBeTrue();
    service.deleteToken();
    expect(service.getToken() === null).toBeTrue();
  });

  it('should save, get and remove name', () => {
    const value = 'test-name';
    service.saveName(value);
    expect(localStorage.getItem(NAME) === value).toBeTrue();
    expect(service.getName() === value).toBeTrue();
    service.deleteName();
    expect(service.getName() === null).toBeTrue();
  });

  it('should save, get and remove lastName', () => {
    const value = 'test-last-name';
    service.saveLastName(value);
    expect(localStorage.getItem(LAST_NAME) === value).toBeTrue();
    expect(service.getLastName() === value).toBeTrue();
    service.deleteLastName();
    expect(service.getLastName() === null).toBeTrue();
  });

  it('should save, get and remove email', () => {
    const value = 'test-email';
    service.saveEmail(value);
    expect(localStorage.getItem(EMAIL) === value).toBeTrue();
    expect(service.getEmail() === value).toBeTrue();
    service.deleteEmail();
    expect(service.getEmail() === null).toBeTrue();
  });

  it('should save, get and remove phone', () => {
    const value = 'test-phone';
    service.savePhoneNumber(value);
    expect(localStorage.getItem(PHONE) === value).toBeTrue();
    expect(service.getPhoneNumber() === value).toBeTrue();
    service.deletePhoneNumber();
    expect(service.getPhoneNumber() === null).toBeTrue();
  });

});
