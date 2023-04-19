import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroupState } from 'ngrx-forms';
import { CommonFiltersModel, OfficeFiltersModel } from 'src/app/root-store/filters-store/models';
import { OfficeLocation } from '../../publish/models/publish.models';

@Component({
  selector: 'office-filters',
  templateUrl: './office-filters.component.html',
  styleUrls: ['./office-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OfficeFiltersComponent implements OnInit {
  @Input() formState!: FormGroupState<OfficeFiltersModel>;
  @Input() formStateCommon!: FormGroupState<CommonFiltersModel>;

  officeLocation = [
    { value: undefined, label: 'Sin especificar' },
    { value: OfficeLocation.STREET, label: 'A pie de calle' },
    { value: OfficeLocation.INTERIOR, label: 'Interior' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
