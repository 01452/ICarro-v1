import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  title?: string;
  message?: string;
  negativeBtn?: string;
  neutralBtn?: string;
  positiveBtn?: string;
}

@Component({
  selector: 'app-error',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  title: string;
  message: string;
  negativeBtn: string;
  neutralBtn: string;
  positiveBtn: string;

  constructor(@Inject(MAT_DIALOG_DATA) dialogData: DialogData) {
    this.title = dialogData.title;
    this.message = dialogData.message;
    this.negativeBtn = dialogData.negativeBtn;
    this.neutralBtn = dialogData.neutralBtn;
    this.positiveBtn = dialogData.positiveBtn;
  }

  ngOnInit(): void {
  }
}
