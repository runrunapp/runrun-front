import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedCardModule } from '../../../components/feed-card/feed-card.module';
import { SearchComponent } from './search.component';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FiltersPanelComponent } from './filters-panel/filters-panel.component';
import { FilterButtonModule } from 'src/app/components/filter-button/filter-button.module';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BooleanCheckgroupModule } from 'src/app/shared/boolean-checkgroup/boolean-checkgroup.module';
import { PropertyFiltersModule } from './property-filters/property-filters.module';
import { FloatFiltersButtonsComponent } from './float-filters-buttons/float-filters-buttons.component';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { MapSearchModule } from './map-search/map-search.module';
import { ProfileGuard } from '../authentication/components/profile.guard';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: SearchComponent, canActivate: [ProfileGuard] },
];

@NgModule({
  declarations: [
    SearchComponent,
    FiltersPanelComponent,
    FloatFiltersButtonsComponent,
  ],
  imports: [
    CommonModule,

    FlexLayoutModule,
    FeedCardModule,
    RouterModule.forChild(routes),
    FilterButtonModule,
    MatIconModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    BooleanCheckgroupModule,
    PropertyFiltersModule,
    FooterModule,
    MapSearchModule,
  ],
})
export class SearchModule {}
