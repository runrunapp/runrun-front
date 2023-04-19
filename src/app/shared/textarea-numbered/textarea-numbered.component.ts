import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  forwardRef,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-textarea-numbered',
  templateUrl: './textarea-numbered.component.html',
  styleUrls: ['./textarea-numbered.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaNumberedComponent),
      multi: true,
    },
  ],
})
export class TextareaNumberedComponent implements OnInit, ControlValueAccessor {
  @Input() maxLenght = 300;
  @Input() value = '';
  @Input() disabled = false;
  @Output() valueChange = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  writeValue(value: string): void {
    if (!this.disabled) {
      this.value = value;
      this.onChange(value);
    }
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onInput(event: any): void {
    this.writeValue(event.target.value);
    this.valueChange.emit(event.target.value);
  }

  onChange = (value: string): void => {};
  onTouched = (): void => {};
}
