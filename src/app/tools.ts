import {Car, Place} from './cars/cars-http.service';
import {DatePipe} from '@angular/common';
import {FormGroup} from '@angular/forms';

export function mapDate(date: Date): string {
  const datePipe = new DatePipe('en');
  return datePipe.transform(date, 'yyyy-MM-dd HH:mm');
}

export function compareCars(car1: Car, car2: Car, lowToHigh: boolean): number {
  let res = car1.price_per_day - car2.price_per_day;
  if (res !== 0) {
    return lowToHigh ? res : res * -1;
  }
  res = car1.make.localeCompare(car2.make);
  if (res !== 0) {
    return res;
  }
  res = car1.model.localeCompare(car2.model);
  if (res !== 0) {
    return res;
  }
  res = car1.year.localeCompare(car2.year);
  return res;
}

export function compareDates(date1: Date, date2: Date): boolean {
  return date1?.getTime() >= date2?.getTime();
}

/**
 * Parse params from string to array of pairs key: value
 * @param url url with params
 */
export function parseParams(url: string) {
  url = url.split('?')[1];
  if (!url) {
    return;
  }
  const pairs = url.split('&');
  const data = {};
  for (const pair of pairs) {
    const param = pair.split('=');
    data[param[0]] = param[1];
  }
  return data;
}

function saveTimestamp(saveName: string) {
  localStorage.setItem(`${saveName}-timestamp`, `${new Date().getTime()}`);
}

function checkTimestamp(savedName: string): boolean {
  const currentTime = new Date().getTime();
  const saveTime = parseInt(localStorage.getItem(`${savedName}-timestamp`), 10);
  return currentTime - saveTime > 3600 * 1000;
}

export function saveFormData(formGroup: FormGroup, url: string) {
  const data = formGroup.getRawValue();
  const jsonData = JSON.stringify(data);
  localStorage.setItem(url, jsonData);
  saveTimestamp(url);
}

export function restoreFormData(formGroup: FormGroup, url: string) {
  if (checkTimestamp(url))
    clearFromData(url);
  const jsonData = localStorage.getItem(url);
  const data = JSON.parse(jsonData);
  if (data)
    formGroup.setValue(data);
}

export function clearFromData(url: string) {
  localStorage.removeItem(url);
}

export function saveAutocomplete(place: Place) {
  const jsonData = JSON.stringify(place)
  localStorage.setItem('autocomplete', jsonData);
  saveTimestamp('autocomplete');
}

export function restoreAutocomplete(): Place {
  if (checkTimestamp('autocomplete'))
    clearSavedAutocomplete();
  const jsonData = localStorage.getItem('autocomplete');
  return JSON.parse(jsonData);
}

export function clearSavedAutocomplete() {
  localStorage.removeItem('autocomplete');
}

export function saveFiles(files: FilesForSave) {
  const forSave = {
    photoNamesMap: [],
    photosUrlsMap: [],
    photosProgressMap: []
  };
  files.photoNamesMap.forEach((value, key) => forSave.photoNamesMap.push({key, value}));
  files.photosProgressMap.forEach((value, key) => forSave.photosProgressMap.push({key, value}));
  files.photosUrlsMap.forEach((value, key) => forSave.photosUrlsMap.push({key, value}));
  const jsonData = JSON.stringify(forSave);
  localStorage.setItem('files', jsonData);
  saveTimestamp('files');
}

export function restoreFiles(): FilesForSave {
  if (checkTimestamp('files'))
    clearFilesForSave();
  const jsonData = localStorage.getItem('files');
  const savedData: SaveFilesData = JSON.parse(jsonData);
  const res: FilesForSave = {
    photosProgressMap: new Map<File, number>(),
    photosUrlsMap: new Map<File, string>(),
    photoNamesMap: new Map<File, string>()
  };
  if (savedData) {
    savedData.photoNamesMap.forEach(value => res.photoNamesMap.set(value.key, value.value));
    savedData.photosProgressMap.forEach(value => res.photosProgressMap.set(value.key, value.value));
    savedData.photosUrlsMap.forEach(value => res.photosUrlsMap.set(value.key, value.value));
  }
  return res;
}

export function clearFilesForSave() {
  localStorage.removeItem('files');
}

export function saveCityValue(data: string) {
  localStorage.setItem('city-value', data);
  saveTimestamp('city-value');
}

export function restoreCityValue(): string {
  if (checkTimestamp('city-value'))
    clearCityValue();
  return localStorage.getItem('city-value');
}

export function clearCityValue() {
  localStorage.removeItem('city-value');
}

export interface FilesForSave {
  photosUrlsMap: Map<File, string>;
  photosProgressMap: Map<File, number>;
  photoNamesMap: Map<File, string>;
}

export interface SaveFilesData {
  photoNamesMap: { key: File, value: string }[];
  photosUrlsMap: { key: File, value: string }[];
  photosProgressMap: { key: File, value: number }[];
}
