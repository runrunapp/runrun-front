import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SearchFieldModule } from 'src/app/shared/runrun-components/search-field/search-field.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    SearchFieldModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    RouterModule,
    FontAwesomeModule,
    FormsModule,
  ],
  exports: [FooterComponent],
})
export class FooterModule {}
