import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroupState, NgrxValueConverter } from 'ngrx-forms';
import { CommonFiltersModel, RoomFiltersModel } from 'src/app/root-store/filters-store/models';
import { BathType, BedType, Gender, Ocupation, RoomHouseType, WindowType } from '../../publish/models/publish.models';

@Component({
  selector: 'room-filters',
  templateUrl: './room-filters.component.html',
  styleUrls: ['./room-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomFiltersComponent implements OnInit {
  @Input() formState!: FormGroupState<RoomFiltersModel>;
  @Input() formStateCommon!: FormGroupState<CommonFiltersModel>;

  roomHouseType = [
    { value: undefined, label: 'Sin especificar' },
    { value: RoomHouseType.HOUSE, label: 'Casa compartida' },
    { value: RoomHouseType.APARTAMENT, label: 'Apartamento compartido' },
  ];
  bedType = [
    { value: undefined, label: 'Sin especificar' },
    { value: BedType.SINGLE, label: 'Cama individual' },
    { value: BedType.DOUBLE, label: 'Cama doble' },
    { value: BedType.TWO, label: 'Dos camas' },
    { value: BedType.NO, label: 'Sin camas' },
  ];
  bathType = [
    { value: undefined, label: 'Sin especificar' },
    { value: BathType.PRIVED, label: 'Baño privado' },
    { value: BathType.SHARED, label: 'Baño compartido' },
  ];
  windowType = [
    { value: undefined, label: 'Sin especificar' },
    { value: WindowType.CORRIDO, label: 'Ventana al pasillo' },
    { value: WindowType.STREET, label: 'Ventana a la calle' },
    { value: WindowType.BACKYARD, label: 'Ventana al patio o patinejo' },
    { value: WindowType.NO, label: 'Sin ventanas' },
  ];
  gender = [
    { value: undefined, label: 'Sin especificar' },
    { value: Gender.ANY, label: 'Cualquiera' },
    { value: Gender.MAN, label: 'Hombre' },
    { value: Gender.WOMAN, label: 'Mujer' },
    { value: Gender.NOBINARY, label: 'No binario' },
  ];
  ocupation = [
    { value: undefined, label: 'Sin especificar' },
    { value: Ocupation.WORKER, label: 'Trabajador' },
    { value: Ocupation.STUDENT, label: 'Estudiante' },
  ];

  checkPopulationValueConverter: NgrxValueConverter<boolean, number> = {
    convertStateToViewValue(value) {
      return value === 0;
    },
    convertViewToStateValue(value) {
      if (value) {
        return 0;
      }
      return 1;
    },
  };


  constructor() { }


  ngOnInit(): void {
  }

}
