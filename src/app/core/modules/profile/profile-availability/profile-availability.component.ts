import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-profile-availability',
  templateUrl: './profile-availability.component.html',
  styleUrls: ['./profile-availability.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileAvailabilityComponent implements OnInit {
  @Input() set availableDay(date: string) {
    this._date = new Date(date)
  }
  @Input() minStay!: number
  @Input() maxStay!: number

  get date() {
    return this._date;
  }
  _date!: Date;

  get isAvailable() {
    return this._date.getTime() <= new Date().getTime();
  }


  constructor() { }

  ngOnInit(): void {
  }

}
