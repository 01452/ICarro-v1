import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, flatMap, map} from 'rxjs/operators';
import {User} from '../shared/shared-http.service';
import {Observable} from 'rxjs';
import {DatePipe} from '@angular/common';
import {LocalStoreService} from '../local-store.service';
import {handleErrors} from '../errors';

/**
 * Results of search provides with this interface
 */
export interface SearchResults {
  current_page: number;
  items_on_page: number;
  items_total: number;
  cars: Car [];
}

export interface BookedPeriod {
  start_date_time: string;
  end_date_time: string;
}

/**
 * Result of search car provides with this inteface
 * Also used as field in SearchResults
 */
export interface Car {
  serial_number: string;
  make: string;
  model: string;
  year: string;
  engine: string;
  fuel: string;
  gear: string;
  wheels_drive: string;
  doors: number;
  seats: number;
  fuel_consumption: number;
  features: string[];
  car_class: string;
  price_per_day: number;
  distance_included: number;
  about: string;
  pick_up_place: Place;
  image_url: string[];
  owner?: User;
  booked_periods?: BookedPeriod[];
}

/**
 * Place of car. Used in Car
 */
export interface Place {
  place_id: string;
  latitude: number;
  longitude: number;
}

/**
 * Interfaces for receiving filter information from server
 */
export interface Filter {
  make: string;
  models: Model[];
}

export interface Model {
  model: string;
  years: Year[];
}

export interface Year {
  year: string;
  engines: Engine[];
}

export interface Engine {
  engine: string;
  fuels: Fuel[];
}

export interface Fuel {
  fuel: string;
  gears: Gear[];
}

export interface Gear {
  gear: string;
  wheels_drives: WheelsDrive[];
}

export interface WheelsDrive {
  wheels_drive: string;
}

/**
 * Request to search cars. All fields are optional. Use only those that you need
 */
export interface SearchCarRequest {
  city?: string;
  startDate?: string;
  endDate?: string;
  make?: string;
  model?: string;
  year?: string;
  engine?: string;
  fuel?: string;
  gear?: string;
  wheelsDrive?: string;
  minAmount?: number;
  maxAmount?: number;
  ascending?: boolean;
  itemsOnPage?: number;
  currentPage?: number;
  latitude?: number;
  longitude?: number;
  radius?: number;
}

/**
 * Body for result of min/max prices for cars by filter
 */
export interface MaxMinResult {
  max: number;
  min: number;
}

/**
 * Interfaces for reservation of a car
 */
export interface ReservationDetails {
  start_date_time: string;
  end_date_time: string;
  person_who_booked: BookPerson;
}

export interface BookPerson {
  email: string;
  first_name: string;
  second_name: string;
  phone: string;
}

export interface ReservationResponse {
  order_number: string;
  amount: number;
  booking_date: string;
}

export interface Comment {
  first_name: string;
  second_name: string;
  post_date: string;
  post: string;
}

export const URL = 'https://rent-cars-app.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class CarsHttpService {

  constructor(private http: HttpClient, private datePipe: DatePipe, private localStore: LocalStoreService) {
  }

  /**
   * Get all filters from server
   */
  getFilters(): Observable<Filter[]> {
    return this.http.get<Filter[]>(URL + '/filters').pipe(catchError(handleErrors).bind(this));
  }

  /**
   * Search cars by all filters that sre sated up in params
   * @param request - SearchCarRequest, fields that are not sated up, or sated up as undefined dont use in server request
   */
  searchCarsByFilters(request: SearchCarRequest): Observable<SearchResults> {
    let params = `?`;
    // to much code for setting url params
    // TODO Optimize later
    if (request.startDate) {
      params += `&start_date=${request.startDate}`;
    }
    if (request.endDate) {
      params += `&end_date=${request.endDate}`;
    }
    if (request.ascending) {
      params += `&ascending=${request.ascending}`;
    }
    if (request.fuel) {
      params += `&fuel=${request.fuel}`;
    }
    if (request.gear) {
      params += `&gear=${request.gear}`;
    }
    if (request.currentPage) {
      params += `&current_page=${request.currentPage}`;
    }
    if (request.itemsOnPage) {
      params += `&items_on_page=${request.itemsOnPage}`;
    }
    if (request.latitude) {
      params += `&latitude=${request.latitude}&longitude=${request.longitude}&radius=${request.radius}`;
    } else {
      if (request.city) {
        params += `&city=${request.city}`;
      }
    }
    if (request.make) {
      params += `&make=${request.make}`;
    }
    if (request.model) {
      params += `&model=${request.model}`;
    }
    if (request.minAmount) {
      params += `&min_amount=${request.minAmount - 1}`;
    }
    if (request.maxAmount) {
      params += `&max_amount=${request.maxAmount - -1}`;
    }
    if (request.wheelsDrive) {
      params += `&wheels_drive=${request.wheelsDrive}`;
    }
    if (request.year) {
      params += `&year=${request.year}`;
    }
    return this.http.get<SearchResults>(URL + '/search/all' + params).pipe(catchError(handleErrors));
  }

  /**
   * Get max and min price for cars with users filters
   * @param request - filtrs
   */
  async getMaxAndMinPrices(request: SearchCarRequest): Promise<MaxMinResult> {
    let cars: Car[];
    request.itemsOnPage = (await this.searchCarsByFilters(request).toPromise()).items_total;
    cars = (await this.searchCarsByFilters(request).toPromise()).cars;
    if (cars.length === 0) {
      return {min: -1, max: -1};
    }
    const carPrices = cars.map(car => car.price_per_day);
    const min = Math.min(...carPrices);
    const max = Math.max(...carPrices);
    return {min, max};
  }

  /**
   * Get all cars from server by users filters without city filter
   * @param params - user filters, city property replaces with undefined
   */
  getAllCars(params: SearchCarRequest): Observable<Car[]> {
    return this.searchCarsByFilters(params)
      .pipe(flatMap((results: SearchResults) => {
        params.itemsOnPage = results.items_total;
        params.currentPage = 0;
        return this.searchCarsByFilters(params);
      }))
      .pipe(map(result => result.cars))
      .pipe(catchError(handleErrors));
  }

  /**
   * Get all car details by car serial number
   * @param carNumber - serial number
   */
  getCar(carNumber: string): Observable<Car> {
    return this.http.get<Car>(URL + '/car?serial_number=' + carNumber)
      .pipe(catchError(handleErrors));
  }

  /**
   * Reserve car on specific date and time
   * @param carNumber - serial number of car for reservation
   * @param reservation - dates for reservations, personal information of booker
   */
  reserveCar(carNumber: string, reservation: ReservationDetails): Observable<ReservationResponse> {
    const token = this.localStore.getToken();
    return this.http.post<ReservationResponse>(URL + '/car/reservation?serial_number=' + carNumber, reservation, {
      headers: {
        Authorization: token
      }
    })
      .pipe(catchError(handleErrors));
  }

  /**
   * Add new car to account.
   * @param car - car details
   * return observable car with details of uploaded car
   */
  addCar(car: Car): Observable<Car> {
    const authHeader = this.getAuthHeader();
    return this.http.post<Car>(`${URL}/car`, car, {
      headers: authHeader
    }).pipe(catchError(handleErrors));
  }

  /**
   * Get 3 best booked cars
   */
  getBestCars(): Observable<Car[]> {
    return this.http.get<Car[]>(`${URL}/car/best`)
      .pipe(catchError(handleErrors))
      .pipe(map(cars => cars.splice(2)));
  }

  /**
   * Get latest comments for specialOffers
   */
  getLatestComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${URL}/comments`)
      .pipe(catchError(handleErrors));
  }

  private getAuthHeader() {
    const token = this.localStore.getToken();
    return token && {
      Authorization: token
    };
  }
}
