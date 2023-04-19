import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesFormComponent } from './images-form.component';
import { ImageFormFieldModule } from '../image-form-field/image-form-field.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
  declarations: [ImagesFormComponent],
  imports: [CommonModule, ImageFormFieldModule, FlexLayoutModule],
  exports: [ImagesFormComponent],
})
export class ImagesFormModule {}
