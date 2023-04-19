import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  ChangeDetectorRef,
  EventEmitter,
} from '@angular/core';

const MAX_MEGABYTE = 1;

@Component({
  selector: 'app-images-form',
  templateUrl: './images-form.component.html',
  styleUrls: ['./images-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImagesFormComponent implements OnInit {
  @Input() allowDelete = false;
  @Input() set images(value: {
    images: Array<string | null>;
    files: Array<File | null>;
  }) {
    this._images = [...value.images];
    this._currentIndex = value.images.findIndex((image) => image === null);
    if (this._currentIndex == -1) {
      this._currentIndex = value.images.length;
    }
    this._total = value.images.length;
    this._files = [...value.files];
  }

  get images() {
    return {
      images: this._images.slice(0, this._currentIndex + 1),
      files: this._files.slice(0, this._currentIndex + 1),
    };
  }

  @Output() imageChange = new EventEmitter<{
    images: Array<string | null>;
    files: Array<File | null>;
  }>();

  _images: Array<string | null> = [];
  _files: Array<File | null> = [];
  _currentIndex = 0;
  _total = 0;

  ngOnInit(): void {}

  imageTrackBy(index: number, images: string | null) {
    return index;
  }

  constructor(private cdr: ChangeDetectorRef) {}

  addImage(file: File): void {
    if (this._currentIndex >= this._total) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      this._images[this._currentIndex] = reader.result as string;
      this._files[this._currentIndex] = file;
      this._currentIndex++;
      this.onChange();
    };
    reader.readAsDataURL(file);
  }
  modifyImage(index: number, event: { file: File; base64: string }): void {
    if (index == this._currentIndex) {
      return this.addImage(event.file);
    } else if (index > this._currentIndex) {
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      this._images[index] = reader.result as string;
      this._files[index] = event.file;

      this.onChange();
    };

    reader.readAsDataURL(event.file);
  }
  removeImage(index: number): void {
    if (index >= this._currentIndex || !this.allowDelete) {
      return;
    }
    for (let i = index; i < this._currentIndex - 1; ++i) {
      this._images[i] = this._images[i + 1];
      this._files[i] = this._files[i + 1];
    }
    this._images[this._currentIndex - 1] = null;
    this._files[this._currentIndex - 1] = null;
    this._currentIndex--;

    this.onChange();
  }
  onChange(): void {
    const images = this._images;
    const files = this._files;

    this.imageChange.emit({ images, files });
  }
}
