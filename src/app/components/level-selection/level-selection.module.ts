import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LevelSelectionComponent } from './level-selection.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [LevelSelectionComponent],
  imports: [CommonModule, MatIconModule, FlexLayoutModule],
  exports: [LevelSelectionComponent],
})
export class LevelSelectionModule {}
