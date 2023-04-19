import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LandingButtonsComponent } from './landing-buttons/landing-buttons.component';
import { SearchFieldModule } from 'src/app/shared/runrun-components/search-field/search-field.module';
import { LandingSwipeModule } from './landing-swipe/landing-swipe.module';
import { LandingBlogModule } from './landing-blog/landing-blog.module';
import { LandingPlusModule } from './landing-plus/landing-plus.module';
import { LandingFiltersButtonsComponent } from './landing-filters-buttons/landing-filters-buttons.component';
import { MatIconModule } from '@angular/material/icon';
import { AnimateModule } from 'src/app/animate-in';
import { FooterModule } from '../footer/footer.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { ProfileGuard } from 'src/app/core/modules/authentication/components/profile.guard';
import { LandingRunrunComponent } from '../landing-runrun/landing-runrun.component';
import { LandingRunrunplusComponent } from '../landing-runrunplus/landing-runrunplus.component';
import { LandingRunrunHeaderComponent } from './landing-runrun-header/landing-runrun-header.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { RunrunplusHeaderComponent } from './runrunplus-header/runrunplus-header.component';
import { RunroomieHeaderComponent } from './runroomie-header/runroomie-header.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    LandingButtonsComponent,
    LandingFiltersButtonsComponent,
    LandingRunrunComponent,
    LandingRunrunplusComponent,
    LandingRunrunHeaderComponent,
    RunrunplusHeaderComponent,
    RunroomieHeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LandingPageComponent,
        canActivate: [ProfileGuard],
      },
    ]),
    FlexLayoutModule,
    SearchFieldModule,
    LandingSwipeModule,
    LandingBlogModule,
    LandingPlusModule,
    MatIconModule,
    MatExpansionModule,
    AnimateModule,
    FooterModule,
    NgxUsefulSwiperModule,
  ],
})
export class LandingPageModule {}
