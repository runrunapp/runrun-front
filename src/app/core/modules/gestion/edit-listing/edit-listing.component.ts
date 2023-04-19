import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { URLs } from 'src/app/app.constants';
import {
  BathType,
  BedType,
  GarageCapacity,
  Gender,
  Ocupation,
} from '../../publish/models/publish.models';
import { PublishService } from '../../publish/services/publish.service';

interface Image {
  id: number;
  image: string;
  listing: number;
}

@Component({
  selector: 'app-edit-listing',
  templateUrl: './edit-listing.component.html',
  styleUrls: ['./edit-listing.component.scss'],
})
export class EditListingComponent implements OnInit {
  constructor(
    private publishService: PublishService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private toasterService: ToastrService
  ) {}

  listingForm: any;
  id!: number;
  Gender = Gender;
  Ocupation = Ocupation;
  GarageCapacity = GarageCapacity;
  managerURL = URLs.managerURL;

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
  garageCapacity = [
    { value: GarageCapacity.SMALL_CAR, label: 'Auto pequeño' },
    { value: GarageCapacity.MEDIUM_CAR, label: 'Auto mediano' },
    { value: GarageCapacity.BIG_CAR, label: 'Auto grande' },
  ];
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const id = params.get('id');

      if (id !== null) {
        this.id = Number.parseInt(id);
        this.publishService.getListing(this.id).subscribe((listing: any) => {
          if (listing) {
            if (listing.propertyType == 'house') {
              this.listingForm = this.fb.group({
                roomNumber: listing.roomNumber,
                bathNumber: listing.bathNumber,
                bed: listing.bed,
                gasCooker: listing.gasCooker,
                electricCooker: listing.electricCooker,
                microwave: listing.microwave,
                refrigerator: listing.refrigerator,
                phone: listing.phone,
                dishes: listing.dishes,
                fan: listing.fan,
                tank: listing.tank,
                independantEntrance: listing.independantEntrance,
                liquidGas: listing.liquidGas,
                manufacturedGas: listing.manufacturedGas,
                independantTank: listing.independantTank,
                propertyType: listing.propertyType,
                airCondition: listing.airCondition,
                allowPets: listing.allowPets,
                balcon: listing.balcon,
                closet: listing.closet,
                details: listing.details,
                elevator: listing.elevator,
                freeRoof: listing.freeRoof,
                garden: listing.garden,
                hotWater: listing.hotWater,
                kitchenEquipped: listing.kitchenEquipped,
                minStay: listing.minStay,
                neighborhood: listing.neighborhood,
                parking: listing.parking,
                pool: listing.pool,
                portman: listing.portman,
                price: listing.price,
                currency: listing.currency,
                tv: listing.tv,
                washingMachine: listing.washingMachine,
                wifi: listing.wifi,
              });
            } else if (listing.propertyType == 'room') {
              this.listingForm = this.fb.group({
                table: listing.table,
                fan: listing.fan,
                fridge: listing.fridge,

                propertyType: listing.propertyType,
                airCondition: listing.airCondition,
                bathType: listing.bathType,
                bedType: listing.bedType,
                bills: listing.bills,
                closet: listing.closet,
                details: listing.details,
                hairDryer: listing.hairDryer,
                hotWater: listing.hotWater,
                minStay: listing.minStay,
                price: listing.price,
                currency: listing.currency,
                tv: listing.tv,
                wifi: listing.wifi,
              });
            } else if (listing.propertyType == 'office') {
              this.listingForm = this.fb.group({
                propertyType: listing.propertyType,
                airCondition: listing.airCondition,
                alarms: listing.alarms,
                details: listing.details,
                elevator: listing.elevator,
                kitchen: listing.kitchen,
                minStay: listing.minStay,
                naturalLight: listing.naturalLight,
                parking: listing.parking,
                price: listing.price,
                currency: listing.currency,
                securitySystem: listing.securitySystem,
                wifi: listing.wifi,
              });
            } else if (listing.propertyType == 'local') {
              this.listingForm = this.fb.group({
                localLocation: listing.localLocation,
                bathNumber: listing.bathNumber,
                linealFrontSize: listing.linealFrontSize,
                floorsNumber: listing.floorsNumber,
                lastActivity: listing.lastActivity,
                extractor: listing.extractor,
                propertyType: listing.propertyType,
                airCondition: listing.airCondition,
                alarms: listing.alarms,
                corner: listing.corner,
                details: listing.details,
                elevator: listing.elevator,
                kitchen: listing.kitchen,
                minStay: listing.minStay,
                naturalLight: listing.naturalLight,
                parking: listing.parking,
                price: listing.price,
                currency: listing.currency,
                securityPersonal: listing.securityPersonal,
                securitySystem: listing.securitySystem,
              });
            } else if (listing.propertyType == 'garage') {
              this.listingForm = this.fb.group({
                propertyType: listing.propertyType,
                alarms: listing.alarms,
                allowElectricMotorcycle: listing.allowElectricMotorcycle,
                automaticDoor: listing.automaticDoor,
                details: listing.details,
                email: listing.email,
                garageCapacity: listing.garageCapacity,
                isCover: listing.isCover,
                minStay: listing.minStay,
                price: listing.price,
                currency: listing.currency,
                securityPersonal: listing.securityPersonal,
                securitySystem: listing.securitySystem,
              });
            }

            this.images = listing.images;
          }
        });
      }
    });
  }

  onCurrencyChange(event: any) {
    this.listingForm.patchValue({
      currency: event.target.textContent,
    });
  }

  onSubmit(): void {
    this.publishService.patchListing(this.id, this.listingForm.value).subscribe(
      (r) => {
        this.toasterService.success('Inmueble actualizado');
        this.router.navigate([this.managerURL, this.id]);
      },

      (e) => {
        this.toasterService.error(e);
      }
    );
  }

  images: Image[] = [];

  imageTrackBy(index: number, images: Image) {
    return index;
  }

  modifyImage(i: number, event: { file: File; base64: string }): void {
    const reader = new FileReader();
    reader.onload = () => {
      this.publishService.updateImage(i, reader.result as string).subscribe({
        next: (response) => {
          this.toasterService.info('Imagen actualizada');
          console.log('Success uploading image');
        },
        error: (error) => {
          this.toasterService.error(error, 'Error al subir imagen');
        },
      });
    };

    reader.readAsDataURL(event.file);
  }

  addPlaceholderImage = null;

  addImage(event: { file: File; base64: string }) {
    const reader = new FileReader();
    reader.onload = () => {
      this.publishService.addImage(this.id, reader.result as string).subscribe({
        next: (response) => {
          this.toasterService.info('Imagen subida correctamente');
          this.publishService.getListing(this.id).subscribe((listing: any) => {
            this.images = listing.images;
          });
          this.addPlaceholderImage = null;
          console.log('Success uploading image');
        },
        error: (error) => {
          this.toasterService.error(error, 'Error al subir imagen');
        },
      });
    };

    reader.readAsDataURL(event.file);
  }

  removeImage(index: number): void {
    this.publishService.removeImage(index).subscribe({
      next: (response) => {
        this.toasterService.info('Imagen eliminada');
        this.publishService.getListing(this.id).subscribe((listing: any) => {
          this.images = listing.images;
        });
      },
      error: (error) => {
        this.toasterService.error(error, 'Error al eliminar imagen');
      },
    });
  }
}
