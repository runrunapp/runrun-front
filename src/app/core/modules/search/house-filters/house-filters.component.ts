import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroupState } from 'ngrx-forms';
import { CommonFiltersModel, HouseFilterModel } from 'src/app/root-store/filters-store/models';
import { HouseType } from '../../publish/models/publish.models';

@Component({
  selector: 'house-filters',
  templateUrl: './house-filters.component.html',
  styleUrls: ['./house-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HouseFiltersComponent implements OnInit {
  @Input() formState!: FormGroupState<HouseFilterModel>
  @Input() formStateCommon!: FormGroupState<CommonFiltersModel>

  houseType = [
    { value: undefined, label: 'Sin especificar' },
    { value: HouseType.INDEPENDIENT, label: 'Independiente' },
    { value: HouseType.APARTAMENT, label: 'Apartamento' },
    { value: HouseType.CORRIDOR, label: 'Pasillo Interior' },
    { value: HouseType.STUDIO, label: 'Estudio' },
    { value: HouseType.DUPLEX, label: 'Duplex' },
  ];
  kitchenEquipped = [
    { value: undefined, label: 'Sin especificar' },
    { value: false, label: 'Cocina no equipada' },
    { value: true, label: 'Cocina equipada' },
  ];
  houseFurnished = [
    { value: undefined, label: 'Sin especificar' },
    { value: false, label: 'Casa no equipada' },
    { value: true, label: 'Casa equipada' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
