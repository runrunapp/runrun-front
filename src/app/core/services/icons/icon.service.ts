import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

export enum Icons {
  ADD = 'add',
  HEART = 'runroomie-heart',
  HEART_FILLED = 'runroomie-heart-filled',
  BLACK_HEART = 'black-heart',
  SHARE = 'share',
  VERIFIED = 'verified',
  PLUS = 'plus',
  GREEN_PLUS = 'green_plus',
  RUNRUNPLUS = 'runrunplus',
  LOGO = 'logo',
  LOGO_FULL = 'logo_full',
  RUNROOMIE = 'runroomie',
  MENU = 'menu',
  MENU_CLOSED = 'menu_closed',
  MENU_OPEN = 'menu_open',
  NEW = 'new',
  NEW_MOBILE = 'new_mobile',
  PIN = 'pin',
  PIN_PINK = 'pin-pink',
  FILTER = 'filter',
  ORDER = 'order',
  SEARCH = 'search',
  MESSAGE = 'message',
  ARROW = 'rightArrow',
  RIGHT_ANCLE = 'right',
  LOADING = 'loading-spinner',
  NAVIGATION_BEFORE = 'navigation_before',
  NAVIGATION_NEXT = 'navigation_next',
  CHECK = 'check',
  ROOMS = 'rooms',
  BATHS = 'baths',
  WHEELCHAIR = 'wheelchair',
  PETS = 'pets',
}

@Injectable({
  providedIn: 'root',
})
export class IconService {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}

  registerIcons(): void {
    this.loadIcons(Object.values(Icons), '../assets/svg/icons');
  }

  private loadIcons(iconKeys: string[], iconUrl: string): void {
    iconKeys.forEach((key) => {
      this.matIconRegistry.addSvgIcon(
        key,
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          `${iconUrl}/${key}.svg`
        )
      );
    });
  }
}
