import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-icon-flip-button',
  templateUrl: './icon-flip-button.component.html',
  styleUrls: ['./icon-flip-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconFlipButtonComponent implements OnInit {
  @Input() label!: string;
  @Input() labelActive!: string;
  @Input() icon!: string;
  @Input() color: string = 'white';
  @Input() active = false;
  @Input() activeColor!: string;
  @Output() clickNormal = new EventEmitter();
  @Output() clickActive = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onClick(): void {
    if (this.active) {
      this.clickActive.emit();
    } else {
      this.clickNormal.emit();
    }
    this.active = !this.active;
  }

  getBackgroundColor(): string {
    if (this.active) {
      return this.activeColor;
    }
    return 'transparent';
  }
}
