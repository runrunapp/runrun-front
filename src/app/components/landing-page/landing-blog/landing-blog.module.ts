import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingBlogComponent } from './landing-blog.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { BlogCardModule } from 'src/app/shared/runrun-components/blog-card/blog-card.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LandingBlogComponent],
  imports: [CommonModule, FlexLayoutModule, NgxUsefulSwiperModule, BlogCardModule, RouterModule.forChild([])],
  exports: [LandingBlogComponent],
})
export class LandingBlogModule {}
