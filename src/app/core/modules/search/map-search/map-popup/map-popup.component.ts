import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';
import { URLs } from 'src/app/app.constants';

@Component({
  selector: 'app-map-popup',
  templateUrl: './map-popup.component.html',
  styleUrls: ['./map-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapPopupComponent implements OnInit {
  @Input() title!: string;
  @Input() price!: number;
  @Input() currency!: string;
  @Input() id!: number;
  @Input() image!: string;
  @Input() isPlus!: boolean;

  constructor() {}

  ngOnInit(): void {}

  profileURL = URLs.profileURL;
}
