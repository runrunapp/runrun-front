import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-horizontal-steps',
  templateUrl: './horizontal-steps.component.html',
  styleUrls: ['./horizontal-steps.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HorizontalStepsComponent implements OnInit {
  @Input() total: number = 3;
  @Input() current: number = 0;
  constructor() {}

  get steps() {
    return [...Array(this.total).keys()];
  }

  ngOnInit(): void {}
}
