import { FormGroup } from '@angular/forms';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

import { OfficeLocation } from '../../models/publish.models';

@Component({
  selector: 'office-details-form',
  templateUrl: './office-details.component.html',
  styleUrls: ['./office-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OfficeDetailsComponent implements OnInit {
  @Input() form!: FormGroup;
  @Input() formCommon!: FormGroup;
  @Output() finished = new EventEmitter();
  @Output() back = new EventEmitter();
  officeLocation = [
    { value: OfficeLocation.STREET, label: 'A pie de calle' },
    { value: OfficeLocation.INTERIOR, label: 'Interior' },
  ];
  constructor() {}

  ngOnInit(): void {}

  get othersForm() {
    return this.form.controls.others as FormGroup;
  }

  onSubmit(event: Event): void {
    if (this.form.valid && this.formCommon.valid) {
      this.finished.emit();
    }
  }
}
