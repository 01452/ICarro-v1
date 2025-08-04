import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {LocalStoreService} from '../local-store.service';
import {handleErrors} from '../errors';

export interface User {
  first_name: string;
  second_name: string;
  registration_date?: string;
  comments?: string[];
  own_cars?: string[];
  booked_cars?: string[];
  history?: string[];
}

const URL = 'https://ilcarro-backend.herokuapp.com/v1';

@Injectable({
  providedIn: 'root'
})
export class SharedHttpService {

  constructor(private http: HttpClient, private localStore: LocalStoreService) {
  }

  registration(user: User, email: string, password: string): Observable<User> {
    const token = `Basic ${btoa(email + ':' + password)}`;
    const auth = {
      headers: {
        Authorization: token
      }
    };
    return this.http.post<User>(URL + '/registration', user, auth)
      .pipe(catchError(handleErrors),
        tap(
          value => {
            this.localStore.saveEmail(email);
            this.localStore.saveToken(token);
            this.localStore.saveName(value.first_name);
            this.localStore.saveLastName(value.second_name);
          }));
  }

  login(email: string, password: string): Observable<User> {
    const token = `Basic ${btoa(email + ':' + password)}`;
    const auth = {
      headers: {
        Authorization: token
      }
    };
    return this.http.get<User>(URL + '/user/login', auth)
      .pipe(catchError(handleErrors),
        tap(value => {
          this.localStore.saveEmail(email);
          this.localStore.saveToken(token);
          this.localStore.saveName(value.first_name);
          this.localStore.saveLastName(value.second_name);
        }));
  }

  deleteAccount() {
    const token = this.localStore.getToken();
    const auth = {
      headers: {
        Authorization: token
      }
    };
    return this.http.delete(`${URL}/user`, auth)
      .pipe(catchError(handleErrors));
  }
}
