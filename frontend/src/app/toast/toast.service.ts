import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private snackBar: MatSnackBar) { }

  private showMessage(textMsg: string, msgType: string): void {
    const snackBarRef = this.snackBar.open(textMsg, 'X', {
      duration: 5000,
      horizontalPosition: "center",
    }
    )
    snackBarRef.onAction().subscribe(
      (action) => snackBarRef.dismiss()
    )
  }

  messageSuccess(textMsg: string): void {
    this.showMessage(textMsg, "msg-success")
  }
  messageWarning(textMsg: string): void {
    this.showMessage(textMsg, "msg-warning")
  }
  messageError(textMsg: string): void {
    this.showMessage(textMsg, "msg-error")
  }
}
