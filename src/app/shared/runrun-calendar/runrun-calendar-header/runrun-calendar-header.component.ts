import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  DateAdapter,
  MatDateFormats,
  MAT_DATE_FORMATS,
} from '@angular/material/core';
import { MatCalendar } from '@angular/material/datepicker';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-runrun-calendar-header',
  templateUrl: './runrun-calendar-header.component.html',
  styleUrls: ['./runrun-calendar-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RunrunCalendarHeaderComponent<D> implements OnDestroy {
  private _destroyed = new Subject<void>();

  constructor(
    private _calendar: MatCalendar<D>,
    private _dateAdapter: DateAdapter<D>,
    @Inject(MAT_DATE_FORMATS) private _dateFormats: MatDateFormats,
    cdr: ChangeDetectorRef
  ) {
    _calendar.stateChanges
      .pipe(takeUntil(this._destroyed))
      .subscribe(() => cdr.markForCheck());
  }

  ngOnDestroy(): void {
    this._destroyed.next();
    this._destroyed.complete();
  }

  get monthYear() {
    const value = this._dateAdapter.format(
      this._calendar.activeDate,
      this._dateFormats.display.monthYearLabel
    );
    return value[0].toLocaleUpperCase() + value.slice(1);
  }

  previousClicked(mode: 'month', event: Event): void {
    this._calendar.activeDate = this._dateAdapter.addCalendarMonths(
      this._calendar.activeDate,
      -1
    );
    event.stopPropagation();
  }

  nextClicked(mode: 'month', event: Event): void {
    this._calendar.activeDate = this._dateAdapter.addCalendarMonths(
      this._calendar.activeDate,
      1
    );

    event.stopPropagation();
  }
}
