import { MatChipsModule } from '@angular/material/chips';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BasicDetailsComponent } from './basic-details.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RunrunSelectModule } from 'src/app/components/runrun-select/runrun-select.module';
import { MapSelectionModule } from '../../../../../components/map-selection/map-selection.module';
import { NominatimService } from 'src/app/core/services/nominatim/nominatim.service';
import { PublishHeaderModule } from './publish-header/publish-header.module';
import { SpinerModule } from 'src/app/shared/runrun-components/spiner/spiner.module';
import { PublishImagesFormComponent } from './publish-images-form/publish-images-form.component';
import { ImagesFormModule } from 'src/app/components/images-form/images-form.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  CityToOptionPipe,
  StateToOptionPipe,
} from '../../guards/state-to-option.pipe';
import { LevelSelectionModule } from 'src/app/components/level-selection/level-selection.module';

@NgModule({
  declarations: [
    BasicDetailsComponent,
    PublishImagesFormComponent,
    StateToOptionPipe,
    CityToOptionPipe,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RunrunSelectModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MapSelectionModule,
    PublishHeaderModule,
    SpinerModule,
    ImagesFormModule,
    FormsModule,
    MatChipsModule,
    LevelSelectionModule,
    ReactiveFormsModule,
  ],
  providers: [NominatimService],
  exports: [BasicDetailsComponent],
})
export class BasicDetailsModule {}
