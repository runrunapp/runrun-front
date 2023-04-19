import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MapSearchComponent } from './map-search.component';
import { MapPopupComponent } from './map-popup/map-popup.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MapSearchComponent,
    MapPopupComponent
  ],
  imports: [
    CommonModule,
    LeafletModule,
    FlexLayoutModule,
    MatIconModule,
    RouterModule
  ],
  exports: [
    MapSearchComponent
  ],

})
export class MapSearchModule { }
