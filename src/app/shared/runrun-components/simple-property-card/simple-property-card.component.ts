import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-simple-property-card',
  templateUrl: './simple-property-card.component.html',
  styleUrls: ['./simple-property-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimplePropertyCardComponent implements OnInit {
  @Input() title!: string;
  @Input() img!: string;
  @Input() price!: number;
  @Input() currency!: string;

  constructor() {}

  ngOnInit(): void {}
}
