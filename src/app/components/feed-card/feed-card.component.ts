import { Listing } from 'src/app/core/modules/search/listing.models';
import { Icons } from 'src/app/core/services/icons/icon.service';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  AfterViewChecked,
} from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedCardComponent implements OnInit {
  @Input() listing!: Listing;
  @Output() cardClicked = new EventEmitter<number>();
  constructor() {}

  swiperConfig: SwiperOptions = {
    autoHeight: true,
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
    loop: false,
  };

  icons = Icons;

  ngOnInit(): void {}

  trackByIndex(index: number, item: any) {
    return index;
  }
}
