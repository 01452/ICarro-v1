import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SharedHttpService} from '../shared-http.service';
import {Router} from '@angular/router';
import {LocalStoreService} from '../../local-store.service';
import {DialogBuilder} from "../../service/dialog/dialog-builder";
import {AuthorizationError, ConnectionError} from "../../errors";
import {MatDialog} from "@angular/material/dialog";

interface NavLinks {
  path: string;
  label: string;
}

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {
  @ViewChild('mobileHeader') mobileHeader: ElementRef;

  navLinks: NavLinks[] = [
    {path: 'search', label: 'Search'},
    {path: 'let-car-work', label: 'Let the car work'},
    {path: 'terms-of-use', label: 'Terms of use'}
  ];
  loginLinks: NavLinks[] = [
    {path: 'registration', label: 'Sign up'},
    {path: 'login', label: 'Log in'}
  ];
  logoutLinks: NavLinks[] = [
    {path: 'logout', label: 'Logout'}
  ];
  opened = false;


  constructor(public router: Router, private localStore: LocalStoreService, private dialog: MatDialog,
              private httpService: SharedHttpService) {
  }

  ngOnInit() {
  }

  get loggedIn(): boolean {
    return !!this.localStore.getToken();
  }

  getUrlParams() {
    if (this.router.url.split('?')[0] === '/login' || this.router.url.split('?')[0] === '/registration') {
      return {url: decodeURIComponent(this.router.url.split('?')[1]?.split('url=')[1])};
    }
    return {url: decodeURI(this.router.url)};
  }

  setOpened() {
    this.opened = true;
  }

  setClosed() {
    this.opened = false;
  }

  showDeleteAccountDialog() {
    this.setClosed();
    new DialogBuilder(this.dialog)
      .title('Delete account?')
      .message('Are you sure that you want delete account? You cant undo this action.')
      .negativeBtn('Close')
      .positiveBtn('Delete', () => this.deleteAccount())
      .show();
  }

  private deleteAccount() {
    this.httpService.deleteAccount()
      .subscribe(() => this.accountDeleted(),
        error => this.deleteError(error));
  }

  private accountDeleted() {
    this.localStore.deleteToken();
    this.localStore.deleteEmail();
    this.localStore.deletePhoneNumber();
    this.localStore.deleteLastName();
    this.localStore.deleteName();
  }

  private deleteError(error: any) {
    if (error instanceof ConnectionError) {
      new DialogBuilder(this.dialog)
        .title('Connection error')
        .message('Check your connection and try again')
        .negativeBtn('Close')
        .positiveBtn('Try again', () => this.deleteAccount())
        .show();
    } else if (error instanceof AuthorizationError) {
      new DialogBuilder(this.dialog)
        .title('Authorization error')
        .message('You are not authorized')
        .positiveBtn('Ok')
        .show();
    } else {
      new DialogBuilder(this.dialog)
        .title('Something goes wrong')
        .positiveBtn('Try again', () => this.deleteAccount())
        .negativeBtn('Close')
        .show();
    }
  }
}
