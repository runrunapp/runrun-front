import { LocalDateValueAccessorModule } from 'angular-date-value-accessor';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileFormRoutingModule } from './user-profile-form-routing.module';
import { UserProfileFormComponent } from './user-profile-form.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ProfileSpinerComponent } from './profile-spiner/profile-spiner.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckgroupModule } from 'src/app/shared/checkgroup/checkgroup.module';
import { ExclusiveCheckgroupModule } from '../../../../components/exclusive-checkgroup/exclusive-checkgroup.module';
import { BooleanCheckgroupModule } from 'src/app/shared/boolean-checkgroup/boolean-checkgroup.module';
import { TextareaNumberedModule } from 'src/app/shared/textarea-numbered/textarea-numbered.module';
import { ImageFormFieldModule } from 'src/app/components/image-form-field/image-form-field.module';

@NgModule({
  declarations: [UserProfileFormComponent, ProfileSpinerComponent],
  imports: [
    CommonModule,
    UserProfileFormRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    CheckgroupModule,
    BooleanCheckgroupModule,
    ExclusiveCheckgroupModule,
    TextareaNumberedModule,
    ImageFormFieldModule,
    LocalDateValueAccessorModule,
  ],
})
export class UserProfileFormModule {}
