import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-publish-images-form',
  templateUrl: './publish-images-form.component.html',
  styleUrls: ['./publish-images-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublishImagesFormComponent implements OnInit {
  @Input() set images(images: Array<string | null>) {
    for (let i = 0; i < images.length; i++) {
      if (images[i] !== null) {
        this._images[i] = images[i];
      }
    }
  }
  get images() {
    return this._images;
  }
  @Output() imageChange = new EventEmitter<Array<string | null>>();
  _images = new Array<string | null>(12).fill(null);

  files = new Array<File | null>(12).fill(null);
  get imgFiles() {
    return { images: this.images, files: this.files };
  }

  constructor() {}

  ngOnInit(): void {}

  onImageChange(event: {
    images: Array<string | null>;
    files: Array<File | null>;
  }): void {
    this.images = event.images;
    this.files = event.files;
    this.imageChange.emit(event.images);
  }
}
