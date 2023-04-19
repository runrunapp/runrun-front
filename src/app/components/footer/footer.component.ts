import { ToastrService } from 'ngx-toastr';
import { SubscriptionService } from './../../core/services/subscription.service';
import { Icons } from './../../core/services/icons/icon.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  faFacebook,
  faInstagram,
  faTelegram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent implements OnInit {
  email = '';

  constructor(
    private subscriptionService: SubscriptionService,
    private toastrService: ToastrService
  ) {}

  icons = Icons;
  socialIcons = {
    facebook: faFacebook,
    twitter: faTwitter,
    telegram: faTelegram,
    instagram: faInstagram,
  };

  ngOnInit(): void {}

  onSubscribe() {
    this.subscriptionService.subscribe(this.email).subscribe({
      next: (res) => {
        this.toastrService.success(
          'Revise su correo electrónico para confirmar la subscripción'
        );
      },
      error: (err) => {
        this.toastrService.error(err.details);
      },
    });
  }
}
