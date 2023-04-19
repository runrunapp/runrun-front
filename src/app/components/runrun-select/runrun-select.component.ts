import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  Input,
  ViewChild,
  ElementRef,
  forwardRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatSelect, MatSelectChange } from '@angular/material/select';

export interface option {
  value: any;
  label: string;
}
@Component({
  selector: 'runrun-select',
  templateUrl: './runrun-select.component.html',
  styleUrls: ['./runrun-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RunrunSelectComponent),
      multi: true,
    },
  ],
})
export class RunrunSelectComponent implements OnInit, ControlValueAccessor {
  @Input() values: option[] = [];
  @Input() disabled = false;
  // @Input() formControlState!: FormControlState<any>;
  @Input() placeholder = 'Seleccionar';
  @Input() label!: string;
  @Input() syncWithForm = true;
  @Input() hasError = false;
  @Input() undefinedState = false;
  @Input() undefinedText = 'No especificado';
  @Output() selectionChange = new EventEmitter<MatSelectChange>();
  @Output() valueChange = new EventEmitter<any>();

  @ViewChild('select') matSelect!: MatSelect;
  @Input() value: any = undefined;
  constructor() {}

  ngOnInit(): void {}

  selectionChanged(event: MatSelectChange): void {
    this.selectionChange.emit(new MatSelectChange(this.matSelect, event.value));
    this.valueChange.emit(event.value);

    this.onChange(event.value);
    this.onTouched();
    const select = this.matSelect._elementRef;
  }

  // ControlValueAccessor Implementation
  onChange: any = () => {};
  onTouched: any = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: any): void {
    // this.value = value;
    if (this.syncWithForm) {
      this.value = value;

      this.onChange(value);
    }
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
