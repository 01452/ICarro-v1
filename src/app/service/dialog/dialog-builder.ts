import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {DialogComponent, DialogData} from './dialog.component';

export class DialogBuilder {
  private readonly params: MatDialogConfig<DialogData>;
  private negativeBtnListener: () => void;
  private neutralBtnListener: () => void;
  private positiveBtnListener: () => void;


  constructor(private dialog: MatDialog) {
    this.params = new MatDialogConfig<DialogData>();
    this.params.data = {};
  }

  public title(title: string) {
    this.params.data.title = title;
    return this;
  }

  public message(message: string) {
    this.params.data.message = message;
    return this;
  }

  public negativeBtn(message: string, listener?: () => void) {
    this.params.data.negativeBtn = message;
    this.negativeBtnListener = listener;
    return this;
  }

  public neutralBtn(message: string, listener?: () => void) {
    this.params.data.neutralBtn = message;
    this.neutralBtnListener = listener;
    return this;
  }

  public positiveBtn(message: string, listener?: () => void) {
    this.params.data.positiveBtn = message;
    this.positiveBtnListener = listener;
    return this;
  }

  public show() {
    const dialogRef = this.dialog.open(DialogComponent, this.params);
    dialogRef.afterClosed().subscribe(value => {
      if (value.negative) {
        this.negativeBtnListener();
      }
      if (value.neutral) {
        this.neutralBtnListener();
      }
      if (value.positive) {
        this.positiveBtnListener();
      }
    });
    return dialogRef;
  }
}
