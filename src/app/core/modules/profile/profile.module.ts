import { MatDialogModule } from '@angular/material/dialog';
import { PropertyTypePipe } from './property-type.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ProfileImagesSwiperComponent } from './profile-images-swiper/profile-images-swiper.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProfileTitleComponent } from './profile-title/profile-title.component';
import { PipesModule } from '../../pipes/pipes.module';
import { MatButtonModule } from '@angular/material/button';
import { ProfileVerificationLabelsComponent } from './profile-verification-labels/profile-verification-labels.component';
import { MatIconModule } from '@angular/material/icon';
import { ProfileAvailabilityComponent } from './profile-availability/profile-availability.component';
import { HouseProfileComponent } from './house-profile/house-profile.component';
import { RoomProfileComponent } from './room-profile/room-profile.component';
import { OfficeProfileComponent } from './office-profile/office-profile.component';
import { LocalProfileComponent } from './local-profile/local-profile.component';
import { GarageProfileComponent } from './garage-profile/garage-profile.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { IconFlipButtonModule } from '../../../components/icon-flip-button/icon-flip-button.module';
import { FlipButtonModule } from '../../../components/flip-button/flip-button.module';
import { ListingSwiperModule } from '../../../components/listing-swiper/listing-swiper.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { IsOwnerPipe } from './is-owner.pipe';
import { LandingSwipeModule } from 'src/app/components/landing-page/landing-swipe/landing-swipe.module';
import { CheckedListComponent } from './checked-list/checked-list.component';
import { RunroomieShareDialogComponent } from './runroomie-share-dialog/runroomie-share-dialog.component';
import { TextareaNumberedModule } from 'src/app/shared/textarea-numbered/textarea-numbered.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileImagesSwiperComponent,
    ProfileTitleComponent,
    ProfileVerificationLabelsComponent,
    ProfileAvailabilityComponent,
    HouseProfileComponent,
    RoomProfileComponent,
    OfficeProfileComponent,
    LocalProfileComponent,
    GarageProfileComponent,
    IsOwnerPipe,
    PropertyTypePipe,
    CheckedListComponent,
    RunroomieShareDialogComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FlexLayoutModule,
    NgxUsefulSwiperModule,
    PipesModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatDialogModule,
    FormsModule,
    IconFlipButtonModule,
    FlipButtonModule,
    ListingSwiperModule,
    PipesModule,
    FooterModule,
    LandingSwipeModule,
    TextareaNumberedModule,
  ],
})
export class ProfileModule {}
