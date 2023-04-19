import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  faFacebook,
  faFacebookSquare,
  faGoogle,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-social-buttons',
  templateUrl: './social-buttons.component.html',
  styleUrls: ['./social-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialButtonsComponent implements OnInit {
  @Output() facebook = new EventEmitter();
  @Output() google = new EventEmitter();

  faGoogle = faGoogle;
  faFacebook = faFacebookSquare;

  constructor() {}

  ngOnInit(): void {}

  onFacebook(): void {
    this.facebook.emit();
  }

  onGoogle(): void {
    this.google.emit();
  }
}
