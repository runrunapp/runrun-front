import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  BathType,
  BedType,
  Gender,
  Ocupation,
  RoomHouseType,
  WindowType,
} from '../../models/publish.models';

@Component({
  selector: 'room-details-form',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.scss'],
})
export class RoomDetailsComponent implements OnInit {
  @Input() form!: FormGroup;
  @Input() formCommon!: FormGroup;
  @Output() finished = new EventEmitter();
  @Output() back = new EventEmitter();
  bedType = [
    { value: BedType.SINGLE, label: 'Cama individual' },
    { value: BedType.DOUBLE, label: 'Cama doble' },
    { value: BedType.TWO, label: 'Dos camas' },
    { value: BedType.NO, label: 'Sin camas' },
  ];
  bathType = [
    { value: BathType.PRIVED, label: 'Baño privado' },
    { value: BathType.SHARED, label: 'Baño compartido' },
  ];

  constructor() {}
  ngOnInit(): void {}

  get comoditiesForm() {
    return this.form.controls.comodities as FormGroup;
  }

  onSubmit(event: Event): void {
    if (this.form.valid && this.formCommon.valid) {
      this.finished.emit();
    }
  }
}
