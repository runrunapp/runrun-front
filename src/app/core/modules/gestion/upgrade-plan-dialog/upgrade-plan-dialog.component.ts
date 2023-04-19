import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-upgrade-plan-dialog',
  templateUrl: './upgrade-plan-dialog.component.html',
  styleUrls: ['./upgrade-plan-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpgradePlanDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
