import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-flip-button',
  templateUrl: './flip-button.component.html',
  styleUrls: ['./flip-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlipButtonComponent implements OnInit {
  @Input() label!: string;
  @Input() labelActive!: string;
  @Input() active = false;

  constructor() {}

  ngOnInit(): void {}
}
