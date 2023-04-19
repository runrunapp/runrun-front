import { FormGroup } from '@angular/forms';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { GarageCapacity } from '../../models/publish.models';

@Component({
  selector: 'garage-details-form',
  templateUrl: './garage-details.component.html',
  styleUrls: ['./garage-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GarageDetailsComponent implements OnInit {
  @Input() form!: FormGroup;
  @Input() formCommon!: FormGroup;
  @Output() finished = new EventEmitter();
  @Output() back = new EventEmitter();
  garageCapacity = [
    { value: GarageCapacity.SMALL_CAR, label: 'Auto pequeño' },
    { value: GarageCapacity.MEDIUM_CAR, label: 'Auto mediano' },
    { value: GarageCapacity.BIG_CAR, label: 'Auto grande' },
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
