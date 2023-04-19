import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-receipt-dialog',
  templateUrl: './add-receipt-dialog.component.html',
  styleUrls: ['./add-receipt-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddReceiptDialogComponent implements OnInit {
  description: string = '';
  file!: File;
  amount: number = 0;
  type: 'income' | 'outcome' | 'info' = 'income';
  currency: string = 'CUP';
  share = false;
  submitted = false;

  constructor(
    public dialogRef: MatDialogRef<AddReceiptDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  onChangeDocument(event: any) {
    this.file = event.target.files[0];
  }

  onClose() {
    this.submitted = true;
    if (this.description && this.file) {
      this.dialogRef.close({
        description: this.description,
        file: this.file,
        amount: this.type == 'outcome' ? -this.amount : +this.amount,
        currency: this.currency,
        share: this.share,
        type: this.type,
      });
    }
  }
}
