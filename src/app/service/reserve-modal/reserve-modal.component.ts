import {Component, Inject, Input, OnInit} from '@angular/core';
import {BookPerson, Car, CarsHttpService, ReservationDetails, ReservationResponse} from '../../cars/cars-http.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LocalStoreService} from '../../local-store.service';
import {finalize} from 'rxjs/operators';
import {DialogBuilder} from '../dialog/dialog-builder';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {AuthenticationError, AuthorizationError, BadRequestError, ConflictError, ConnectionError} from '../../errors';
import {Router} from '@angular/router';
import {mapDate} from '../../tools';

export interface ReserveData {
  car: Car;
  dateStart: Date;
  dateEnd: Date;
}

@Component({
  selector: 'reserve-modal',
  templateUrl: './reserve-modal.component.html',
  styleUrls: ['./reserve-modal.component.scss']
})
export class ReserveModalComponent implements OnInit {
  car: Car;
  dateStart: Date;
  dateEnd: Date;

  reserveForm: FormGroup;
  loading = false;

  constructor(@Inject(MAT_DIALOG_DATA) reserveData: ReserveData, private httpService: CarsHttpService, private router: Router,
              private localStore: LocalStoreService, private formBuilder: FormBuilder, private dialog: MatDialog,
              private dialogRef: MatDialogRef<ReserveModalComponent>) {
    this.car = reserveData.car;
    this.dateStart = reserveData.dateStart;
    this.dateEnd = reserveData.dateEnd;
  }

  ngOnInit(): void {
    this.initForm();
  }

  reserveCar(person: BookPerson) {
    this.loading = true;
    const reservationDetails: ReservationDetails = {
      start_date_time: mapDate(this.dateStart),
      end_date_time: mapDate(this.dateEnd),
      person_who_booked: person
    };
    this.localStore.savePhoneNumber(person.phone);
    this.httpService.reserveCar(this.car.serial_number, reservationDetails)
      .pipe(finalize(() => this.loading = false))
      .subscribe(order => this.showSuccess(order), error => this.showError(error, person));
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.reserveForm.controls[controlName];
    return control?.touched && control?.invalid;
  }

  getErrors(controlName: string) {
    return this.reserveForm.controls[controlName]?.errors;
  }

  getPrice(): number {
    return this.car.price_per_day *
      Math.max(1, Math.abs((this.dateEnd?.getTime() - this.dateStart?.getTime()) / 86400000));
  }

  private initForm() {
    const firstNameControl = new FormControl(this.getNameOfUser(), Validators.required);
    const lastNameControl = new FormControl(this.getLastNameOfUser(), Validators.required);
    const emailControl = new FormControl(this.getEmailOfUser(), [Validators.email, Validators.required]);
    const phoneControl = new FormControl(this.getPhoneOfUser(), [Validators.required, Validators.pattern(/^\+?\d{10,12}$/)]);
    this.reserveForm = this.formBuilder.group({
      firstName: firstNameControl,
      lastName: lastNameControl,
      phone: phoneControl,
      email: emailControl
    });
  }

  private getNameOfUser(): string | null {
    return this.localStore.getName();
  }

  private getLastNameOfUser(): string | null {
    return this.localStore.getLastName();
  }

  private getEmailOfUser(): string | null {
    return this.localStore.getEmail();
  }

  private getPhoneOfUser(): string | null {
    return this.localStore.getPhoneNumber();
  }

  private showSuccess(order: ReservationResponse) {
    this.dialogRef.close();
    new DialogBuilder(this.dialog)
      .title('Order success')
      .message(`Your order number ${order.order_number}, order price ${order.amount}$`)
      .positiveBtn('Close', () => window.location.reload())
      .show();
  }

  private showError(error: any, person: BookPerson) {
    if (error instanceof ConnectionError) {
      new DialogBuilder(this.dialog)
        .title('Connection error')
        .message('Check your connection and try again')
        .negativeBtn('Close')
        .positiveBtn('Try again', () => this.reserveCar(person))
        .show();
    } else if (error instanceof AuthorizationError) {
      new DialogBuilder(this.dialog)
        .title('Authorization error')
        .message('You need login or register before rent car')
        .negativeBtn('Close')
        .neutralBtn('Registration', () => this.router.navigate(['/registration'],
          {queryParams: {url: decodeURI(this.router.url)}}
        ))
        .positiveBtn('Login', () => this.router.navigate(['/login'],
          {queryParams: {url: decodeURI(this.router.url)}}
        ))
        .show();
    } else if (error instanceof AuthenticationError) {
      new DialogBuilder(this.dialog)
        .title('Forbidden')
        .message('You cant rent this car from this account')
        .positiveBtn('Ok')
        .show();
    } else if (error instanceof BadRequestError) {
      new DialogBuilder(this.dialog)
        .title('Bad request')
        .message('Wrong params')
        .positiveBtn('Ok')
        .show();
    } else if (error instanceof ConflictError) {
      new DialogBuilder(this.dialog)
        .title('Conflict')
        .message('This car is already booked for this period')
        .positiveBtn('Ok')
        .show();
    } else {
      new DialogBuilder(this.dialog)
        .title('Something goes wrong')
        .positiveBtn('Try again', () => this.reserveCar(person))
        .negativeBtn('Close')
        .show();
    }
  }
}

export class ReserveDialogBuilder {

  private readonly params: MatDialogConfig<ReserveData>;

  constructor(private dialog: MatDialog) {
    this.params = new MatDialogConfig<ReserveData>();
    this.params.data = {
      car: null,
      dateStart: null,
      dateEnd: null
    };
  }

  public car(car: Car): ReserveDialogBuilder {
    this.params.data.car = car;
    return this;
  }

  public dateStart(dateStart: Date): ReserveDialogBuilder {
    this.params.data.dateStart = dateStart;
    return this;
  }

  public dateEnd(dateEnd: Date): ReserveDialogBuilder {
    this.params.data.dateEnd = dateEnd;
    return this;
  }

  public show(): MatDialogRef<ReserveModalComponent> {
    const dialogRef = this.dialog.open(ReserveModalComponent, this.params);
    return dialogRef;
  }
}
