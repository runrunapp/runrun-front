import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  ImageCropperPanelComponent,
  ImageFormFieldComponent,
} from './image-form-field.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ImageCropperModule } from 'ngx-image-cropper';
import { NgxImageCompressService } from 'ngx-image-compress';

@NgModule({
  declarations: [ImageFormFieldComponent, ImageCropperPanelComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    ImageCropperModule,
    MatDialogModule,
  ],
  providers: [NgxImageCompressService],
  exports: [ImageFormFieldComponent],
})
export class ImageFormFieldModule {}
