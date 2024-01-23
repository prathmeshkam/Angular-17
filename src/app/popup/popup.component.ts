import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [MatDialogModule,MatButtonModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {
  // constructor(public dialogRef: MatDialogRef<PopupComponent>) {}

  // closeDialog(): void {
  //   this.dialogRef.close();
  // }
}
