import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import {
  MatCalendarCellClassFunction,
  MatCalendarCellCssClasses,
} from '@angular/material/datepicker';
import { RunrunCalendarHeaderComponent } from './runrun-calendar-header/runrun-calendar-header.component';

@Component({
  selector: 'runrun-calendar',
  templateUrl: './runrun-calendar.component.html',
  styleUrls: ['./runrun-calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RunrunCalendarComponent),
      multi: true,
    },
  ],
})
export class RunrunCalendarComponent<D>
  implements OnInit, ControlValueAccessor {
  @Input() selectedDate!: D;
  @Input() minDate: D = this.dateAdapter.today();
  @Input() maxDate: D = this.dateAdapter.addCalendarYears(
    this.dateAdapter.today(),
    10
  );
  @Input() disabled = false;

  headerComponent = RunrunCalendarHeaderComponent;
  constructor(private dateAdapter: DateAdapter<D>) {}

  ngOnInit(): void {}

  writeValue(value: any): void {
    const date = this.dateAdapter.deserialize(value);
    if (date !== null) {
      this.selectedDate = date;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onChange = (value: any): void => {};
  onTouched = (): void => {};
  onSelectedChange(value: D | null): void {
    if (value !== null) {
      this.selectedDate = value;
      const date = this.dateAdapter.toIso8601(value);
      this.onChange(date);
    }
  }
}
