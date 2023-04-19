import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { LatLng, LeafletEvent } from 'leaflet';
import { NominatimService } from 'src/app/core/services/nominatim/nominatim.service';
import { AppState } from 'src/app/root-store';
import { State } from 'src/app/root-store/address-store/address.models';
import { PropertyType } from '../../models/publish.models';

@Component({
  selector: 'basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.scss'],
})
export class BasicDetailsComponent implements OnInit {
  @Input() formGroupName!: string;
  @Input() states: State[] = [];
  @Output() continue = new EventEmitter();
  form!: FormGroup;

  propertyType = [
    { value: PropertyType.HOUSE, label: 'Vivienda' },
    { value: PropertyType.ROOM, label: 'Habitación' },
    { value: PropertyType.OFFICE, label: 'Oficina' },
    { value: PropertyType.LOCAL, label: 'Local' },
    { value: PropertyType.GARAGE, label: 'Garaje' },
  ];

  province: State | null = null;

  get cities() {
    if (this.province) {
      return this.province.cities;
    }
    return [];
  }

  onCurrencyChange(event: any) {
    this.form.patchValue({
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

  constructor(
    private nominatim: NominatimService,
    private rootFormGroup: FormGroupDirective
  ) {}

  ngOnInit(): void {
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
  }

  handleMapChange(event: LeafletEvent): void {
    const center = event.target.getCenter() as LatLng;

    this.form.patchValue({
      location: {
        lat: center.lat,
        lon: center.lng,
      },
    });

    this.nominatim
      .getAddress({
        lat: center.lat,
        lon: center.lng,
        zoom: event.target.getZoom(),
        addressdetails: 1,
      })
      .subscribe((response) => {
        this.form.patchValue({
          address: response.display_name,
        });
      });
  }

  get images() {
    return this.form.controls.images.value.map((image: any) => image.image);
  }

  onImageChange(images: Array<string | null>): void {
    const imagesArray: Array<{ image: string }> = [];
    images.forEach((image) => {
      if (image) {
        imagesArray.push({ image });
      }
    });
    this.form.patchValue({
      images: imagesArray,
    });
  }

  onSubmit(): void {
    this.form.updateValueAndValidity();
    if (this.form.valid) {
      this.continue.emit();
    } else {
      // TODO: Show error message
    }
  }
}
