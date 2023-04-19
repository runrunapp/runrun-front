import { LevelSelectionModule } from './../../../../components/level-selection/level-selection.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyFiltersComponent } from './property-filters.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RunrunSelectModule } from 'src/app/components/runrun-select/runrun-select.module';
import { MatChipsModule } from '@angular/material/chips';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PropertyFiltersComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RunrunSelectModule,
    // HouseFiltersModule,
    // RoomFiltersModule,
    // OfficeFiltersModule,
    // LocalFiltersModule,
    // GarageFiltersModule,
    // CommonFiltersModule,
    MatChipsModule,
    LevelSelectionModule,
    ReactiveFormsModule,
  ],
  exports: [PropertyFiltersComponent],
})
export class PropertyFiltersModule {}
