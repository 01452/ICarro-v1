import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SharedHttpService, User} from '../../shared/shared-http.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DialogBuilder} from '../dialog/dialog-builder';
import {MatDialog} from '@angular/material/dialog';
import {finalize} from 'rxjs/operators';
import {ConflictError, ConnectionError} from '../../errors';

interface RegistrationData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  @Output('registered') registeredEventEmitter = new EventEmitter();
  @Output('login') loginEmitter = new EventEmitter();
  @Output('loading') loadingEmitter = new EventEmitter();

  registrationForm: FormGroup;

  constructor(private sharedService: SharedHttpService, private formBuilder: FormBuilder, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  register(regData: RegistrationData) {
    const user: User = {
      first_name: regData.firstName,
      second_name: regData.lastName
    };
    this.loadingEmitter.emit(true);
    this.sharedService.registration(user, regData.email, regData.password)
      .pipe(finalize(() => this.loadingEmitter.emit(false)))
      .subscribe((usr) => {
        this.registeredEventEmitter.emit();
      }, error => this.showError(error, regData));
  }

  private showError(error: any, regData: RegistrationData) {
    if (error instanceof ConnectionError) {
      new DialogBuilder(this.dialog)
        .title('Connection error')
        .message('Check your connection and try again')
        .negativeBtn('Close')
        .positiveBtn('Try again', () => this.register(regData))
        .show();
    } else if (error instanceof ConflictError) {
      new DialogBuilder(this.dialog)
        .title('Registration error')
        .message('User with this email already exists')
        .positiveBtn('Ok')
        .show();
    } else {
      new DialogBuilder(this.dialog)
        .title('Something goes wrong')
        .positiveBtn('Try again', () => this.register(regData))
        .negativeBtn('Close')
        .show();
    }
  }

  private initForm() {
    this.registrationForm = this.formBuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.pattern(
        /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]$  )/
      )
        , Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8), Validators.pattern(/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]*/)]],
      termsOfUse: [null, [Validators.requiredTrue]]
    });
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.registrationForm.controls[controlName];
    return control.touched && control.invalid;
  }

  getError(controlName: string) {
    const control = this.registrationForm.controls[controlName];
    return control.errors;
  }
}
