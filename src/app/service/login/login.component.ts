import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SharedHttpService} from '../../shared/shared-http.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {DialogBuilder} from '../dialog/dialog-builder';
import {finalize} from 'rxjs/operators';
import {AuthorizationError, ConnectionError} from '../../errors';

interface LoginData {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output('logged-in') loggedInEventEmitter = new EventEmitter();
  @Output('registration') registrationEmitter = new EventEmitter();
  @Output('loading') loadingEmitter = new EventEmitter();

  loginForm: FormGroup;

  constructor(private sharedService: SharedHttpService, private formBuilder: FormBuilder, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  login(loginData: LoginData) {
    this.loadingEmitter.emit(true);
    this.sharedService.login(loginData.email, loginData.password)
      .pipe(finalize(() => this.loadingEmitter.emit(false)))
      .subscribe((usr) => this.loggedInEventEmitter.emit(),
        error => this.showError(error, loginData));
  }

  private showError(error: any, loginData: LoginData) {
    if (error instanceof ConnectionError) {
      new DialogBuilder(this.dialog)
        .title('Connection error')
        .message('Check your connection and try again')
        .negativeBtn('Close')
        .positiveBtn('Try again', () => this.login(loginData))
        .show();
    } else if (error instanceof AuthorizationError) {
      new DialogBuilder(this.dialog)
        .title('Authorization error')
        .message('Wrong email or password')
        .positiveBtn('Ok')
        .show();
    } else {
      new DialogBuilder(this.dialog)
        .title('Something goes wrong')
        .positiveBtn('Try again', () => this.login(loginData))
        .negativeBtn('Close')
        .show();
    }
  }

  private initForm() {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.loginForm.controls[controlName];
    return control.touched && control.invalid;
  }

  getErrors(controlName: string) {
    return this.loginForm.controls[controlName].errors;
  }
}
