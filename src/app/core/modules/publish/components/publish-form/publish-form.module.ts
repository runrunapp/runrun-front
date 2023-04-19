import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublishFormRoutingModule } from './publish-form-routing.module';
import { PublishFormComponent } from './publish-form.component';
import { PublishHeaderModule } from '../basic-details/publish-header/publish-header.module';
import { BasicDetailsModule } from '../basic-details/basic-details.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HouseDetailsModule } from '../house-details/house-details.module';
import { RoomDetailsModule } from '../room-details/room-details.module';
import { OfficeDetailsModule } from '../office-details/office-details.module';
import { LocalDetailsModule } from '../local-details/local-details.module';
import { GarageDetailsModule } from '../garage-details/garage-details.module';
import { AnimateModule } from 'src/app/animate-in';
import { PublishFormConditionsModule } from '../publish-form-conditions/publish-form-conditions.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PublishFormComponent],
  imports: [
    CommonModule,
    PublishFormRoutingModule,
    PublishHeaderModule,
    FlexLayoutModule,
    BasicDetailsModule,
    HouseDetailsModule,
    RoomDetailsModule,
    OfficeDetailsModule,
    LocalDetailsModule,
    GarageDetailsModule,
    AnimateModule,
    PublishFormConditionsModule,
    ReactiveFormsModule,
  ],
})
export class PublishFormModule {}
