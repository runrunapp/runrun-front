import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { URLs } from 'src/app/app.constants';
import { Collection } from 'src/app/core/modules/search/listing.models';
import { ListingService } from 'src/app/core/modules/search/listing.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-landing-swipe',
  templateUrl: './landing-swipe.component.html',
  styleUrls: ['./landing-swipe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingSwipeComponent implements OnInit {
  constructor(private listingService: ListingService) {
    this.data$ = this.listingService.getCollections();
  }
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
    spaceBetween: 10,
    centeredSlides: true,
    effect: 'slide',
    observer: true,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 480px
      600: {
        slidesPerView: 1,
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

  data$!: Observable<Collection[]>;
  listingURL = URLs.profileURL;

  ngOnInit(): void {}
}
