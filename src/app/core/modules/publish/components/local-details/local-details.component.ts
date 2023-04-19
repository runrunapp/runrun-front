import { FormGroup } from '@angular/forms';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { OfficeLocation } from '../../models/publish.models';

@Component({
  selector: 'local-details-form',
  templateUrl: './local-details.component.html',
  styleUrls: ['./local-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocalDetailsComponent implements OnInit {
  @Input() form!: FormGroup;
  @Input() formCommon!: FormGroup;
  @Output() finished = new EventEmitter();
  @Output() back = new EventEmitter();
  localLocation = [
    { value: OfficeLocation.STREET, label: 'A pie de calle' },
    { value: OfficeLocation.INTERIOR, label: 'Interior' },
  ];

  constructor() {}

  get othersForm() {
    return this.form.controls.others as FormGroup;
  }

  ngOnInit(): void {}
  onSubmit(event: Event): void {
    if (this.form.valid && this.formCommon.valid) {
      this.finished.emit();
    }
  }
}
