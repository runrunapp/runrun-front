import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HouseDetailsComponent } from './house-details.component';
import { MatButtonModule } from '@angular/material/button';
import { RunrunSelectModule } from 'src/app/components/runrun-select/runrun-select.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SpinerModule } from '../../../../../shared/runrun-components/spiner/spiner.module';
import { CheckgroupModule } from 'src/app/shared/checkgroup/checkgroup.module';
import { PublishFormConditionsModule } from '../publish-form-conditions/publish-form-conditions.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TextareaNumberedModule } from 'src/app/shared/textarea-numbered/textarea-numbered.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HouseDetailsComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    RunrunSelectModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    SpinerModule,
    CheckgroupModule,
    PublishFormConditionsModule,
    TextareaNumberedModule,
    ReactiveFormsModule,
  ],
  exports: [HouseDetailsComponent],
})
export class HouseDetailsModule {}
