import { Injectable } from '@angular/core';


const TOKEN = 'TOKEN';
const NAME = 'NAME';
const LAST_NAME = 'LAST_NAME';
const EMAIL = 'EMAIL';
const PHONE = 'PHONE';

@Injectable({
  providedIn: 'root'
})
export class LocalStoreService {

  constructor() { }

  saveToken(token: string) {
    localStorage.setItem(TOKEN, token);
  }

  getToken(): string | null{
    return localStorage.getItem(TOKEN);
  }

  deleteToken() {
    localStorage.removeItem(TOKEN);
  }

  saveName(firstName: string) {
    localStorage.setItem(NAME, firstName);
  }

  getName(): string | null {
    return localStorage.getItem(NAME);
  }

  deleteName() {
    localStorage.removeItem(NAME);
  }

  saveLastName(lastName: string) {
    localStorage.setItem(LAST_NAME, lastName);
  }

  getLastName(): string | null{
    return localStorage.getItem(LAST_NAME);
  }

  deleteLastName() {
    localStorage.removeItem(LAST_NAME);
  }

  saveEmail(email: string) {
    localStorage.setItem(EMAIL, email);
  }

  getEmail(): string | null {
    return localStorage.getItem(EMAIL);
  }

  deleteEmail() {
    localStorage.removeItem(EMAIL);
  }

  savePhoneNumber(phoneNumber: string) {
    localStorage.setItem(PHONE, phoneNumber);
  }

  getPhoneNumber(): string | null {
    return localStorage.getItem(PHONE);
  }

  deletePhoneNumber() {
    localStorage.removeItem(PHONE);
  }

}
