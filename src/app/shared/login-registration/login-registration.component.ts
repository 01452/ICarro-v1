import {Component, OnInit} from '@angular/core';
import {SharedHttpService} from '../shared-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {LocalStoreService} from '../../local-store.service';
import {DialogBuilder} from '../../service/dialog/dialog-builder';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-login-registration',
  templateUrl: './login-registration.component.html',
  styleUrls: ['./login-registration.component.scss']
})
export class LoginRegistrationComponent implements OnInit {

  private urlNavigate: string;
  _loginFlag = true;
  loading = false;

  constructor(private sharedService: SharedHttpService, private localStore: LocalStoreService, private router: Router,
              private route: ActivatedRoute, private title: Title, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    /**
     * Get url params that contains url before login
     */
    this.loginFlag = this.router.url.split('?')[0] === '/login';
    this.title.setTitle(this.loginFlag ? 'Login' : 'Registration');
    this.route.queryParams.subscribe(params => this.urlNavigate = params.url || '');
    if (this.localStore.getToken()) {
      new DialogBuilder(this.dialog)
        .title('Logged in')
        .message('You are already logged in')
        .positiveBtn('Ok', this.back.bind(this))
        .show();
    }
  }

  loggedIn() {
    new DialogBuilder(this.dialog)
      .title('Logged in')
      .message('Logged in success')
      .positiveBtn('Ok', this.back.bind(this))
      .show();
  }

  registered() {
    new DialogBuilder(this.dialog)
      .title('Registered')
      .message('You are logged in success')
      .positiveBtn('Ok', this.back.bind(this))
      .show();
  }

  /**
   * Parse params from string to array of pairs key: value
   * @param url url with params
   */
  private parseParams(url: string) {
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

  get loginFlag() {
    return this._loginFlag;
  }

  set loginFlag(loginFlag: boolean) {
    this.title.setTitle(loginFlag ? 'Login' : 'Registration');
    this._loginFlag = loginFlag;
  }

  private back() {
    this.router.navigate(
      [this.urlNavigate.split('?')[0]], {queryParams: this.parseParams(this.urlNavigate)}
    ).then();
  }
}
