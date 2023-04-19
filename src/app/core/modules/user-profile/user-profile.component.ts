import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTelegram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { URLs } from 'src/app/app.constants';
import { AppState, AuthenticationSelectors } from 'src/app/root-store';
import { UsersActions, UsersSelectors } from 'src/app/root-store/users-store';

import { SwiperOptions } from 'swiper';
import { Icons } from '../../services/icons/icon.service';
import { User } from '../authentication/authentication.models';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit, OnDestroy {
  constructor(
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute
  ) {}
  user$!: Observable<User | undefined>;
  currentUserId$!: Observable<number | undefined>;
  icons = Icons;

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
    spaceBetween: 10,
    slidesPerView: 2,
  };

  subscriptions: Subscription[] = [];

  userEditURL = URLs.userProfileFormURL;
  logoutURL = URLs.logoutURL;
  userFavoritesURL = URLs.userFavoritesURL;

  genderString(value: number): string | string | string | string {
    switch (value) {
      case 0:
        return 'Hombre';
      case 1:
        return 'Mujer';
      case 2:
        return 'Persona';
      case 3:
        return '';
    }
    return '';
  }
  ocupationString(value: number): string | string | string | string {
    switch (value) {
      case 1:
        return 'Trabajador';
      case 2:
        return 'Estudiante';
      case 3:
        return 'Trabajador y Estudiante';
    }
    return '';
  }

  getAge(value: any): number {
    const birthday = new Date(value);
    const today = new Date();
    let age = today.getFullYear() - birthday.getFullYear();
    if (
      today.getMonth() < birthday.getMonth() ||
      (today.getMonth() === birthday.getMonth() &&
        today.getDate() < birthday.getDate())
    ) {
      age -= 1;
    }
    return age;
  }

  getProfilePictures(user: User) {
    const pics = [];
    if (user.profile.profilePicture1) {
      pics.push(user.profile.profilePicture1);
    }
    if (user.profile.profilePicture2) {
      pics.push(user.profile.profilePicture2);
    }
    if (user.profile.profilePicture3) {
      pics.push(user.profile.profilePicture3);
    }
    if (pics.length === 0) {
      pics.push(null);
    }
    return pics;
  }

  getProgress(user: User) {
    let p = 0;
    if (user.profile.profilePicture1 !== null) {
      p += 10;
    }
    if (user.profile.profilePicture1 !== null) {
      p += 5;
    }
    if (user.profile.profilePicture1 !== null) {
      p += 5;
    }
    if (user.firstName) {
      p += 10;
    }
    if (user.lastName) {
      p += 10;
    }
    if (user.profile.birthday) {
      p += 10;
    }
    if (user.profile.gender) {
      p += 10;
    }

    if (user.profile.presentation) {
      p += 20;
    }

    if (user.profile.facebook) {
      p += 5;
    }
    if (user.profile.instagram) {
      p += 5;
    }
    if (user.profile.twitter) {
      p += 5;
    }
    if (user.profile.linkedin) {
      p += 5;
    }
    return p;
  }

  socialIcons = {
    facebook: faFacebook,
    twitter: faTwitter,
    linkedIn: faLinkedin,
    instagram: faInstagram,
  };

  ngOnInit(): void {
    this.user$ = this.store.pipe(select(UsersSelectors.selectSelectedUser));
    this.currentUserId$ = this.store.pipe(
      select(AuthenticationSelectors.selectLoggedUserId)
    );
    this.subscriptions.push(
      this.activatedRoute.paramMap.subscribe((params) => {
        const id = params.get('id');
        if (id) {
          this.store.dispatch(
            UsersActions.selectUserById({ id: Number.parseInt(id) })
          );
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subs) => subs.unsubscribe());
  }
}
