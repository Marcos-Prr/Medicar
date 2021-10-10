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
      panelClass:[msgType]
    }
    )
    snackBarRef.onAction().subscribe(
      (action) => snackBarRef.dismiss()
    )
  }

  messageSuccess(textMsg: string): void {
    this.showMessage(textMsg, "success-toast")
  }
  messageWarning(textMsg: string): void {
    this.showMessage(textMsg, "warning-toast")
  }
  messageError(textMsg: string): void {
    this.showMessage(textMsg, "error-toast")
  }
}
