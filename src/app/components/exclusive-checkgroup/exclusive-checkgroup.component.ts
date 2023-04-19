import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  ViewChildren,
  QueryList,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';

@Component({
  selector: 'app-exclusive-checkgroup',
  templateUrl: './exclusive-checkgroup.component.html',
  styleUrls: ['./exclusive-checkgroup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ExclusiveCheckgroupComponent),
      multi: true,
    },
  ],
})
export class ExclusiveCheckgroupComponent
  implements OnInit, ControlValueAccessor
{
  constructor() {}
  @Input() values!: { label: string; value: any }[];
  @Input() value: any;
  @Output() change = new EventEmitter<any>();
  @Input() columns = 2;

  @ViewChildren(MatCheckbox) checkboxes!: QueryList<MatCheckbox>;

  ngOnInit(): void {}

  onClick(i: number): void {
    this.value = this.values[i].value;
    this.checkboxes.forEach((checkbox, index) => {
      if (index === i) {
        checkbox.checked = true;
      } else {
        checkbox.checked = false;
      }
    });
    this.onChange(this.value);
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
    this.value = value;
  }
}
