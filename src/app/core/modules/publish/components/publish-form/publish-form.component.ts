import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { State } from 'src/app/root-store/address-store/address.models';
import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { fadeInLeft, fadeInRight, fadeOutLeft, fadeOutRight } from 'ng-animate';
import { AddressActions, AddressSelectors, AppState } from 'src/app/root-store';
import { PropertyType } from '../../models/publish.models';
import { PublishService } from '../../services/publish.service';
import { takeUntil } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { URLs } from 'src/app/app.constants';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-publish-form',
  templateUrl: './publish-form.component.html',
  styleUrls: ['./publish-form.component.scss'],
  animations: [
    trigger('fadeInLeft', [transition('void => *', useAnimation(fadeInLeft))]),
    trigger('fadeInRight', [
      transition('void => *', useAnimation(fadeInRight)),
    ]),
    trigger('fadeOutLeft', [
      transition('* => void', useAnimation(fadeOutLeft)),
    ]),
    trigger('fadeOutRight', [
      transition('* => void', useAnimation(fadeOutRight)),
    ]),
  ],
})
export class PublishFormComponent implements OnInit, OnDestroy {
  publishForm = this.fb.group({
    basic: this.fb.group({
      planType: [null, Validators.required],
      propertyType: [null, Validators.required],
      totalArea: [null, [Validators.required]],
      currency: ['CUP', [Validators.required]],
      location: this.fb.group({
        lat: [null, [Validators.required]],
        lon: [null, [Validators.required]],
      }),
      municipality: [null, [Validators.required]],
      price: [null, [Validators.required, Validators.min(0)]],
      minStay: [null],
      floorLevel: [0, [Validators.required]],
      address: ['', [Validators.required]],
      neighborhood: [''],
      images: [[]],
    }),
    common: this.fb.group({
      details: ['', [Validators.required, Validators.maxLength(300)]],
      cleanService: [false],
      maintainerService: [false],
      billPaymentService: [false],
      transportationService: [false],
      floorLevelAccesible: [false],
      entranceRamp: [false],
      handicappedAccessible: [false],
    }),
    house: this.fb.group({
      houseType: [null, [Validators.required]],
      allowPets: [false],
      roomNumber: [null, [Validators.required, Validators.min(1)]],
      bathNumber: [null, [Validators.required, Validators.min(1)]],
      allowRunroomies: [true],
      electrodomestic: this.fb.group({
        airCondition: [false],
        bed: [false],
        closet: [false],
        gasCooker: [false],
        electricCooker: [false],
        kitchenEquipment: [false],
        microwave: [false],
        refrigerator: [false],
        phone: [false],
        tv: [false],
        dishes: [false],
        wifi: [false],
        fan: [false],
        washingMachine: [false],
      }),
      infrastructure: this.fb.group({
        hotWater: [false],
        freeRoof: [false],
        balcon: [false],
        tank: [false],
        elevator: [false],
        independantEntrance: [false],
        liquidGas: [false],
        manufacturedGas: [false],
        garden: [false],
        independantTank: [false],
        pool: [false],
        portman: [false],
        parking: [false],
      }),
    }),
    room: this.fb.group({
      bedType: [null, [Validators.required]],
      bathType: [null, [Validators.required]],
      comodities: this.fb.group({
        tv: [false],
        hairDryer: [false],
        table: [false],
        airCondition: [false],
        wifi: [false],
        hotWater: [false],
        fan: [false],
        fridge: [false],
        closet: [false],
      }),
    }),
    office: this.fb.group({
      officeLocation: [null, [Validators.required]],
      bathNumber: [null, [Validators.required]],
      others: this.fb.group({
        airCondition: [false],
        parking: [false],
        naturalLight: [false],
        wifi: [false],
        elevator: [false],
        securitySystem: [false],
        alarms: [false],
        kitchen: [false],
      }),
    }),
    local: this.fb.group({
      localLocation: [null, [Validators.required]],
      linealFrontSize: [null],
      bathNumber: [null, [Validators.required]],
      floorsNumber: [null],
      lastActivity: [''],
      others: this.fb.group({
        airCondition: [false],
        corner: [false],
        parking: [false],
        naturalLight: [false],
        elevator: [false],
        securitySystem: [false],
        securityPersonal: [false],
        alarms: [false],
        extractor: [false],
        kitchen: [false],
      }),
    }),
    garage: this.fb.group({
      garageCapacity: [null, [Validators.required]],
      allowElectricMotorcycle: [false],

      others: this.fb.group({
        isCover: [false],
        securitySystem: [false],
        securityPersonal: [false],
        alarms: [false],
        automaticDoor: [false],
      }),
    }),
  });

  step: 'basic' | 'detail' | 'conditions' = 'basic';
  states: State[] = [];
  _onDestroy$ = new Subject();

  constructor(
    private store: Store<AppState>,
    private publishService: PublishService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParamMap
      .pipe(takeUntil(this._onDestroy$))
      .subscribe((params) => {
        const planType = params.get('planType');
        if (planType) {
          this.publishForm.patchValue({
            basic: {
              planType: planType,
            },
          });
        } else {
          this.router.navigate([URLs.publishURL]);
        }
      });

    this.store.dispatch(AddressActions.requestStates());
    this.store
      .pipe(select(AddressSelectors.selectStates), takeUntil(this._onDestroy$))
      .subscribe((states) => {
        this.states = states;
      });
  }

  get basicForm() {
    return this.publishForm.controls.basic as FormGroup;
  }
  get commonForm() {
    return this.publishForm.controls.common as FormGroup;
  }
  get houseForm() {
    return this.publishForm.controls.house as FormGroup;
  }
  get roomForm() {
    return this.publishForm.controls.room as FormGroup;
  }
  get officeForm() {
    return this.publishForm.controls.office as FormGroup;
  }
  get localForm() {
    return this.publishForm.controls.local as FormGroup;
  }
  get garageForm() {
    return this.publishForm.controls.garage as FormGroup;
  }

  ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  goToBasic(): void {
    this.step = 'basic';
    this.scrollToTop();
  }
  goToDetails(): void {
    this.step = 'detail';
    this.scrollToTop();
  }
  goToConditions(): void {
    this.step = 'conditions';
    this.scrollToTop();
  }

  scrollToTop(): void {
    const scrollToTop = window.setInterval(() => {
      const pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 50); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 16);
  }

  onSubmit(event: Event): void {
    if (this.basicForm.invalid) {
      this.toastr.error(
        'El formulario de datos básicos contiene campos inválidos',
        'Campos incorrectos'
      );
      return;
    }
    if (this.commonForm.invalid) {
      this.toastr.error(
        'El formulario de datos comunes contiene campos inválidos',
        'Campos incorrectos'
      );
      return;
    }

    this.publishService.publish(this.publishForm.value);
  }
  PropertyType = PropertyType;
}
