import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'login-registration-modal',
  templateUrl: './login-registration-modal.component.html',
  styleUrls: ['./login-registration-modal.component.scss']
})
export class LoginRegistrationModalComponent implements OnInit {
  loginFlag = true;
  loading = false;

  constructor(public dialogRef: MatDialogRef<LoginRegistrationModalComponent>) {
  }

  ngOnInit(): void {
  }
}
