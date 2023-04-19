import { Component, OnInit } from '@angular/core';
import {
  RouteConfigLoadEnd,
  RouteConfigLoadStart,
  Router,
} from '@angular/router';
import { IconService } from './core/services/icons/icon.service';
import { LoadingService } from './core/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  showSpinner$ = this.loadingService.showSpinner;
  constructor(
    private iconService: IconService,
    private router: Router,
    private loadingService: LoadingService
  ) {
    router.events.subscribe((event): void => {
      if (event instanceof RouteConfigLoadStart) {
        loadingService.handleRequest('plus');
      } else if (event instanceof RouteConfigLoadEnd) {
        loadingService.handleRequest('minus');
      }
    });
  }

  ngOnInit(): void {
    this.iconService.registerIcons();
  }
}
