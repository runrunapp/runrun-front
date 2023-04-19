import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { SimplePropertyCardComponent } from './simple-property-card.component';
import { PipesModule } from 'src/app/core/pipes/pipes.module';

@NgModule({
  declarations: [SimplePropertyCardComponent],
  imports: [CommonModule, FlexLayoutModule, MatCardModule, PipesModule],
  exports: [SimplePropertyCardComponent],
})
export class SimplePropertyCardModule {}
