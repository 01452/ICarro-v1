import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaticLocationService {

  // Hardcoded cities data - Israeli cities
  private cities = [
    { name: 'Rehovot', short_name: 'Rehovot' },
    { name: 'Tel Aviv', short_name: 'TLV' },
    { name: 'Jerusalem', short_name: 'JRS' },
    { name: 'Haifa', short_name: 'Haifa' },
    { name: 'Beer Sheva', short_name: 'BeerSheva' },
    { name: 'Netanya', short_name: 'Netanya' },
    { name: 'Ashdod', short_name: 'Ashdod' },
    { name: 'Petah Tikva', short_name: 'PetahTikva' },
    { name: 'Rishon LeZion', short_name: 'RishonLeZion' },
    { name: 'Holon', short_name: 'Holon' }
  ];

  // Hardcoded places data
  private places = [
    {
      place_id: 'static_place_1',
      formatted_address: '123 Main St, New York, NY 10001, USA',
      latitude: 40.7128,
      longitude: -74.0060
    }
  ];

  getCities() {
    return this.cities;
  }

  getPlaces() {
    return this.places;
  }
}
