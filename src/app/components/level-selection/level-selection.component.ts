import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  forwardRef,
  Input,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 'app-level-selection',
  templateUrl: './level-selection.component.html',
  styleUrls: ['./level-selection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LevelSelectionComponent),
      multi: true,
    },
  ],
})
export class LevelSelectionComponent implements OnInit, ControlValueAccessor {
  @Input() minValue = 0;
  @Input() maxValue = 5;
  @Input() step = 1;
  @Input() value = 0;
  @Input() disabled = false;
  @Input() indeterminateValue: number | undefined = undefined;
  @Input() hasError = false;
  @Input() errorMessage!: string;
  @Input() light = false;
  @Input() displayFn(value: number): string {
    if (value === undefined) {
      return '';
    }
    return value.toString();
  }

  @HostBinding('style.opacity')
  get opacity() {
    return this.disabled ? 0.25 : 1;
  }

  get displayValue() {
    return this.displayFn(this.value);
  }

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

  constructor() {}

  ngOnInit(): void {}
}
