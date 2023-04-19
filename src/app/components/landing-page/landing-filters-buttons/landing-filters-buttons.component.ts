import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { URLs } from 'src/app/app.constants';
import { PropertyType } from 'src/app/core/modules/publish/models/publish.models';
import { AppState } from 'src/app/root-store';

@Component({
  selector: 'app-landing-filters-buttons',
  templateUrl: './landing-filters-buttons.component.html',
  styleUrls: ['./landing-filters-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingFiltersButtonsComponent implements OnInit {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private store: Store<AppState>,
    private router: Router
  ) {
    this.matIconRegistry.addSvgIcon(
      'casas',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../../../../assets/landing/casas.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'apartamentos',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../../../../assets/landing/apartamentos.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'habitaciones',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../../../../assets/landing/habitaciones.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'oficinas',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../../../../assets/landing/oficinas.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'garajes',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../../../../assets/landing/garajes.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'locales',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../../../../assets/landing/locales.svg'
      )
    );
  }

  ngOnInit(): void {}

  onClick(filter: string): void {
    let propertyType = '';
    switch (filter) {
      case 'apartament':
        propertyType = PropertyType.HOUSE;
        break;
      case 'house':
        propertyType = PropertyType.HOUSE;
        break;
      case 'room':
        propertyType = PropertyType.ROOM;
        break;
      case 'office':
        propertyType = PropertyType.OFFICE;
        break;
      case 'local':
        propertyType = PropertyType.LOCAL;
        break;
      case 'garage':
        propertyType = PropertyType.GARAGE;
        break;
    }
    this.router.navigate([URLs.feedURL], {
      queryParams: {
        propertyType: propertyType,
      },
    });
  }
}
