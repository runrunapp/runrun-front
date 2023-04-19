import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { SwiperComponent } from 'ngx-useful-swiper';
import { Observable, Subscription } from 'rxjs';
import { PostReduced } from 'src/app/core/modules/blog/blog.models';
import { BlogService } from 'src/app/core/modules/blog/blog.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-landing-blog',
  templateUrl: './landing-blog.component.html',
  styleUrls: ['./landing-blog.component.scss'],
})
export class LandingBlogComponent implements OnInit, OnDestroy, AfterViewInit {
  private subscriptions: Subscription[] = [];

  blogs$!: Observable<PostReduced[]>;

  swiperOptions: SwiperOptions = {
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
    loop: true,

    centeredSlides: true,
    effect: 'slide',
    observer: true,
    // Responsive breakpoints
    // autoplay: {
    //   delay: 5000,
    // },
  };

  get index() {
    return this.swiper?.swiper?.realIndex ?? 0;
  }
  @ViewChild('swiperRef') swiper?: SwiperComponent;

  ngAfterViewInit(): void {}

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogs$ = this.blogService.getAllPostReduced();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  onSwiper(event: any) {
    this.swiper = event.swiper;
  }
}
