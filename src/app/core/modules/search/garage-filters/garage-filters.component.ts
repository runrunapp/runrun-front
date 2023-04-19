import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { FormGroupState } from 'ngrx-forms';
import {
  CommonFiltersModel,
  GarageFiltersModel,
} from 'src/app/root-store/filters-store/models';
import { GarageCapacity } from '../../publish/models/publish.models';

@Component({
  selector: 'garage-filters',
  templateUrl: './garage-filters.component.html',
  styleUrls: ['./garage-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GarageFiltersComponent implements OnInit {
  @Input() formState!: FormGroupState<GarageFiltersModel>;
  @Input() formStateCommon!: FormGroupState<CommonFiltersModel>;

  garageCapacity = [
    { value: undefined, label: 'Sin especificar' },
    { value: GarageCapacity.SMALL_CAR, label: 'Auto pequeño' },
    { value: GarageCapacity.MEDIUM_CAR, label: 'Auto mediano' },
    { value: GarageCapacity.BIG_CAR, label: 'Auto grande' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
