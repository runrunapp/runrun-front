import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'boolean-checkgroup',
  templateUrl: './boolean-checkgroup.component.html',
  styleUrls: ['./boolean-checkgroup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BooleanCheckgroupComponent),
      multi: true,
    },
  ],
})
export class BooleanCheckgroupComponent
  implements OnInit, ControlValueAccessor {
  @Input() label!: string;
  @Input() value: boolean | undefined = undefined;
  @Input() yesLabel = 'Si';
  @Input() noLabel = 'No';
  @Input() vertical = false;
  get isYes(): boolean {
    return this.value !== undefined && this.value;
  }
  get isNot(): boolean {
    return this.value !== undefined && !this.value;
  }
  get isUndefined(): boolean {
    return this.value === undefined;
  }

  constructor() {}

  ngOnInit(): void {}

  onYes(): void {
    if (this.isYes) {
      this.value = undefined;
    } else {
      this.value = true;
    }
    this.onChange(this.value);
  }
  onNot(): void {
    if (this.isNot) {
      this.value = undefined;
    } else {
      this.value = false;
    }
    this.onChange(this.value);
  }

  writeValue(value: boolean | undefined): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onChange = (value: boolean | undefined): void => {};
  onTouched = (): void => {};
}
