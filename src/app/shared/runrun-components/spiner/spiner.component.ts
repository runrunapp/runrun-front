import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  forwardRef,
  HostBinding,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-spiner',
  templateUrl: './spiner.component.html',
  styleUrls: ['./spiner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SpinerComponent),
      multi: true,
    },
  ],
})
export class SpinerComponent implements OnInit, ControlValueAccessor {
  @Input() minValue = 0;
  @Input() maxValue = 5;
  @Input() step = 1;
  @Input() value = 0;
  @Input() disabled = false;
  @Input() indeterminateValue: number | undefined;
  @Input() hasError = false;
  @Input() errorMessage!: string;

  @HostBinding('style.opacity')
  get opacity() {
    return this.disabled ? 0.25 : 1;
  }

  get inputType() {
    if (
      this.indeterminateValue !== undefined &&
      this.value === this.indeterminateValue
    ) {
      return 'text';
    }
    return 'number';
  }

  get displayValue() {
    if (this.inputType === 'text') {
      return '-';
    }

    return this.value;
  }

  constructor() {}
  ngOnInit(): void {}
  onDecrease(): void {
    if (!this.disabled) {
      this.value -= this.step;
      if (this.value < this.minValue) {
        this.value = this.minValue;
      }
      this.onChange(this.value);
    }
  }
  onIncrease(): void {
    if (!this.disabled) {
      this.value += this.step;
      if (this.value > this.maxValue) {
        this.value = this.maxValue;
      }
      this.onChange(this.value);
    }
  }
  /**
   * Write form value to the DOM element (model => view)
   */
  writeValue(value: number): void {
    if (!this.disabled) {
      this.value = value;
    }
  }

  /**
   * Write form disabled state to the DOM element (model => view)
   */
  setDisabledState(isDisabled: boolean): void {}

  /**
   * Update form when DOM element value changes (view => model)
   */
  registerOnChange(fn: (value: number) => void): void {
    // Store the provided function as an internal method.
    this.onChange = fn;
  }

  /**
   * Update form when DOM element is blurred (view => model)
   */
  registerOnTouched(fn: () => void): void {
    // Store the provided function as an internal method.
    this.onTouched = fn;
  }

  onChange = (value: number): void => {};
  onTouched = (): void => {};
  onInput(event: any): void {
    const value = Number(event.target.value);
    this.value = value;
    this.onChange(value);
  }
}
