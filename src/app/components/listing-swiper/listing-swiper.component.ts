import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { URLs } from 'src/app/app.constants';
import { ListingReduced } from 'src/app/core/modules/search/listing.models';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-listing-swiper',
  templateUrl: './listing-swiper.component.html',
  styleUrls: ['./listing-swiper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListingSwiperComponent implements OnInit {

  constructor() {}
  @Input() listings: ListingReduced[] = [];
  config: SwiperOptions = {
    pagination: {
      el: '.swiper-pagination',
      clickable: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    effect: 'slide',
    observer: true,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 480px
      600: {
        slidesPerView: 2,
      },
      900: {
        slidesPerView: 2,
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 3,
      },
    },
  };

  listingURL = URLs.profileURL;

  ngOnInit(): void {}
}
