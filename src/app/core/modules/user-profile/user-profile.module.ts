import { FeedCardModule } from './../../../components/feed-card/feed-card.module';
import { MatIconModule } from '@angular/material/icon';
import { AvatarModule } from 'ngx-avatars';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from './user-profile.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FavoritesComponent } from './favorites/favorites.component';

@NgModule({
  declarations: [UserProfileComponent, FavoritesComponent],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    FlexLayoutModule,
    NgxUsefulSwiperModule,
    FooterModule,
    AvatarModule,
    MatButtonModule,
    FontAwesomeModule,
    MatIconModule,
    FeedCardModule,
  ],
})
export class UserProfileModule {}
