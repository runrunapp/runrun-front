import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/root-store';
import { PropertyType } from '../../publish/models/publish.models';

@Component({
  selector: 'app-property-filters',
  templateUrl: './property-filters.component.html',
  styleUrls: ['./property-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertyFiltersComponent implements OnInit {
  @Input() formGroup!: FormGroup;

  propertyType = [
    { value: PropertyType.HOUSE, label: 'Vivienda' },
    { value: PropertyType.ROOM, label: 'Habitación' },
    { value: PropertyType.OFFICE, label: 'Oficina' },
    { value: PropertyType.LOCAL, label: 'Local' },
    { value: PropertyType.GARAGE, label: 'Garage' },
  ];

  constructor() {}

  ngOnInit(): void {}

  onCurrencyChange(event: any) {
    this.formGroup.patchValue({
      currency: event.target.textContent,
    });
  }

  displayLevel = (value: number) => {
    switch (value) {
      case -3:
        return 'Seleccionar';
      case -2:
        return 'Sótano';
      case -1:
        return 'Semisótano';
      case 0:
        return 'Planta Baja';
      case 1:
        return 'Primer Piso';
      case 2:
        return 'Segundo Piso';
      default:
        return value.toString();
    }
  };

  resetFilters() {
    this.formGroup.patchValue({
      propertyType: PropertyType.HOUSE,
      currency: null,
      minPrice: null,
      maxPrice: null,
      minTotalArea: null,
      maxTotalArea: null,
      floorLevel: -3,
      availableDate: null,
      minStay: null,
      maxStay: null,
    });
  }
}
