import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { RunrunSelectComponent } from './runrun-select.component';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatSelectModule,
  ],
  exports: [RunrunSelectComponent],
  declarations: [RunrunSelectComponent],
  providers: [],
})
export class RunrunSelectModule {}
