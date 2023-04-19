import { Icons } from 'src/app/core/services/icons/icon.service';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { SwiperOptions } from 'swiper';
import { ListingImage } from '../../search/listing.models';

@Component({
  selector: 'app-profile-images-swiper',
  templateUrl: './profile-images-swiper.component.html',
  styleUrls: ['./profile-images-swiper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileImagesSwiperComponent implements OnInit {
  @Input() images!: ListingImage[];
  @Input() isPlus = false;
  swiperConfig: SwiperOptions = {
    allowTouchMove: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 0,
    loop: true,

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      600: {
        slideActiveClass: 'slide-active',
        slidePrevClass: 'slide-prev',
        slideNextClass: 'slide-next',
        slidesPerView: 'auto',
        centeredSlides: true,
      },
    },

    // centeredSlidesBounds: true,
  };

  icons = Icons;

  constructor() {}

  ngOnInit(): void {}
}
