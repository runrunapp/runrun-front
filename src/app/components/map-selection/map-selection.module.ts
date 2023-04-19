import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapSelectionComponent } from './map-selection.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [MapSelectionComponent],
  imports: [CommonModule, LeafletModule],
  exports: [MapSelectionComponent],
})
export class MapSelectionModule {}
