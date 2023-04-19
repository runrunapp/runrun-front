import { ImageFormFieldModule } from './../../../../components/image-form-field/image-form-field.module';
import { TextareaNumberedModule } from 'src/app/shared/textarea-numbered/textarea-numbered.module';
import { CheckgroupModule } from './../../../../shared/checkgroup/checkgroup.module';
import { MatChipsModule } from '@angular/material/chips';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditListingRoutingModule } from './edit-listing-routing.module';
import { EditListingComponent } from './edit-listing.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { SpinerModule } from 'src/app/shared/runrun-components/spiner/spiner.module';

@NgModule({
  declarations: [EditListingComponent],
  imports: [
    CommonModule,
    EditListingRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatChipsModule,
    CheckgroupModule,
    SpinerModule,
    TextareaNumberedModule,
    ImageFormFieldModule,
  ],
})
export class EditListingModule {}
