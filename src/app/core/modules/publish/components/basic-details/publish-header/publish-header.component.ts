import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'publish-header',
  templateUrl: './publish-header.component.html',
  styleUrls: ['./publish-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublishHeaderComponent implements OnInit {
  @Input() basic = true;
  @Input() disabled = true;
  @Output() toggle = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onBasic(): void {
    if (!this.basic && !this.disabled) {
      this.toggle.emit();
    }
  }
  onDetails(): void {
    if (this.basic && !this.disabled) {
      this.toggle.emit();
    }
  }
}
