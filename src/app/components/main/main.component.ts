import { takeUntil } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
import {
  APP_ID,
  Component,
  HostListener,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router, ActivatedRoute } from '@angular/router';
import { fadeInUp } from 'ng-animate';
import { Subject } from 'rxjs';
import { ToolbarComponent } from '../toolbar/toolbar.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  get isRunRunHome() {
    return this.router.url === '/' && this.activeLandingPage === 'RUNRUN';
  }
  @ViewChild('snav') snav!: MatSidenav;
  @ViewChild('toolbar') toolbar!: ToolbarComponent;

  activeLandingPage: 'RUNRUN' | 'RUNRUNPLUS' | 'RUNROOMIE' | null = null;
  _onDestroy = new Subject();

  scrolled = false;

  fadeInUp = fadeInUp;

  ngOnInit(): void {
    const loader = document.getElementById('page-loader');

    if (loader) {
      loader.hidden = true;
    }
    this.activatedRoute.paramMap
      .pipe(takeUntil(this._onDestroy))
      .subscribe((params) => {
        if (params.get('page') === 'RUNRUN') {
          this.activeLandingPage = 'RUNRUN';
        } else if (params.get('page') === 'RUNRUNPLUS') {
          this.activeLandingPage = 'RUNRUNPLUS';
        } else if (params.get('page') === 'RUNROOMIE') {
          this.activeLandingPage = 'RUNROOMIE';
        } else {
          this.activeLandingPage = null;
        }
      });
  }

  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    const numb = window.scrollY;
    const vh = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    );
    if (numb > vh * 0.8 - 15) {
      this.scrolled = true;
    } else {
      this.scrolled = false;
    }
  }

  onActivate(event: any): void {
    this.scrollPageToTop();
  }

  scrollPageToTop(): void {
    if (isPlatformBrowser(this.platformId)) {
      const scrollToTop = window.setInterval(() => {
        const pos = window.pageYOffset;
        if (pos > 0) {
          window.scrollTo(0, pos - 50); // how far to scroll on each step
        } else {
          window.clearInterval(scrollToTop);
        }
      }, 16);
    }
  }
}
