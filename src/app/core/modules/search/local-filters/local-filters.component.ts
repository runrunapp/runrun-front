import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroupState } from 'ngrx-forms';
import { CommonFiltersModel, LocalFiltersModel } from 'src/app/root-store/filters-store/models';
import { OfficeLocation } from '../../publish/models/publish.models';

@Component({
  selector: 'local-filters',
  templateUrl: './local-filters.component.html',
  styleUrls: ['./local-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LocalFiltersComponent implements OnInit {
  @Input() formState!: FormGroupState<LocalFiltersModel>;
  @Input() formStateCommon!: FormGroupState<CommonFiltersModel>;

  localLocation = [
    { value: undefined, label: 'Sin especificar' },
    {value: OfficeLocation.STREET, label: "A pie de calle"},
    {value: OfficeLocation.INTERIOR, label: "Interior"},
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
