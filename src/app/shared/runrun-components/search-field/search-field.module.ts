import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchFieldComponent } from './search-field.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NominatimService } from 'src/app/core/services/nominatim/nominatim.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchFieldComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
  ],
  providers: [NominatimService],
  exports: [SearchFieldComponent],
})
export class SearchFieldModule {}
