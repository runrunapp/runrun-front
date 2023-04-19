import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-accept-cancel-dialog',
  templateUrl: './accept-cancel-dialog.component.html',
  styleUrls: ['./accept-cancel-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AcceptCancelDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {message: string}) { }

  ngOnInit(): void {
  }

}
