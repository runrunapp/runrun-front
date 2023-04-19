import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/root-store';
import { HouseType } from '../../models/publish.models';

@Component({
  selector: 'house-details-form',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.scss'],
})
export class HouseDetailsComponent implements OnInit {
  @Input() form!: FormGroup;
  @Input() formCommon!: FormGroup;
  @Output() finished = new EventEmitter();
  @Output() back = new EventEmitter();
  houseType = [
    { value: HouseType.INDEPENDIENT, label: 'Independiente' },
    { value: HouseType.APARTAMENT, label: 'Apartamento' },
    { value: HouseType.CORRIDOR, label: 'Pasillo Interior' },
    { value: HouseType.STUDIO, label: 'Estudio' },
    { value: HouseType.DUPLEX, label: 'Duplex' },
  ];
  kitchenEquipped = [
    { value: false, label: 'Cocina no equipada' },
    { value: true, label: 'Cocina equipada' },
  ];
  houseFurnished = [
    { value: false, label: 'Casa no equipada' },
    { value: true, label: 'Casa equipada' },
  ];

  get electrodomesticForm() {
    return this.form.controls.electrodomestic as FormGroup;
  }
  get infrastructureForm() {
    return this.form.controls.infrastructure as FormGroup;
  }

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  onSubmit(event: Event): void {
    this.form.updateValueAndValidity();
    this.formCommon.updateValueAndValidity();
    if (this.form.valid && this.formCommon.valid) {
      this.finished.emit();
    }
  }
}
