import { LoadingService } from './../../core/services/loading.service';
import { urltoFile } from './../../shared/utils';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  Inject,
} from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';
import { DOC_ORIENTATION, NgxImageCompressService } from 'ngx-image-compress';

@Component({
  selector: 'app-cropper',
  template: `
    <h2 mat-dialog-title>Recortar imagen</h2>
    <mat-dialog-content>
      <image-cropper
        [imageBase64]="image"
        format="png"
        [maintainAspectRatio]="false"
        (imageCropped)="imageCropped($event)"
        (imageLoaded)="imageLoaded($event)"
        (cropperReady)="cropperReady()"
        (loadImageFailed)="loadImageFailed()"
      >
      </image-cropper>
    </mat-dialog-content>
    <mat-dialog-actions>
      <!-- The mat-dialog-close directive optionally accepts a value as a result for the dialog. -->
      <button mat-button [mat-dialog-close]="croppedImage">Recortar</button>
    </mat-dialog-actions>
  `,
})
export class ImageCropperPanelComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { imageBase64: string }
  ) {
    this.image = data.imageBase64;
  }

  ngOnInit(): void {}
  @Input() image: string = '';

  croppedImage: any = '';

  imageCropped(event: ImageCroppedEvent) {
    if (event.base64) {
      this.croppedImage = event.base64;
    }
  }
  imageLoaded(image: LoadedImage) {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }
}

@Component({
  selector: 'app-image-form-field',
  templateUrl: './image-form-field.component.html',
  styleUrls: ['./image-form-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageFormFieldComponent implements OnInit {
  @Input() image: string | null = null;
  @Input() allowDelete = false;
  @Input() addActive = false;
  @Input() modifyActive = false;
  @Output() add = new EventEmitter<{ file: File; base64: string }>();
  @Output() remove = new EventEmitter<void>();

  constructor(
    private dialog: MatDialog,
    private compressService: NgxImageCompressService,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {}

  removeImage(): void {
    this.remove.emit();
  }

  imageChangedEvent: any = '';

  addImage() {
    this.loadingService.handleRequest('plus');
    this.compressService.uploadAndGetImageWithMaxSize(2, true).then(
      (result: string) => {
        console.log('Compress image: ', result);
        console.log(
          'Size in bytes of the uploaded image was:',
          this.compressService.byteCount(result)
        );
        this.loadingService.handleRequest('minus');
        this.cropImage(result);
      },
      (result: string) => {
        console.log('Unompress image: ', result);
        console.log(
          "The compression algorithm didn't succed! The best size we can do is",
          this.compressService.byteCount(result),
          'bytes'
        );
        this.loadingService.handleRequest('minus');
        this.cropImage(result);
      }
    );
  }

  cropImage(imageBase64: string) {
    let dialogRef = this.dialog.open(ImageCropperPanelComponent, {
      data: { imageBase64: imageBase64 },
    });

    dialogRef.afterClosed().subscribe((image) => {
      const file = urltoFile(image, 'image.png');
      this.add.emit({ file: file, base64: image });
    });
  }
}
