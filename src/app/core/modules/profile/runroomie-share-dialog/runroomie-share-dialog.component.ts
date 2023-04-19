import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface DialogData {
  text: string;
}

@Component({
  selector: 'app-runroomie-share-dialog',
  templateUrl: './runroomie-share-dialog.component.html',
  styleUrls: ['./runroomie-share-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RunroomieShareDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<RunroomieShareDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {}
}
