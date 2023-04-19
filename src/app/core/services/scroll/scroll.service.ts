import { HostListener, Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  valueScrolled: BehaviorSubject<number> = new BehaviorSubject(0);
  percentScrolled: BehaviorSubject<number> = new BehaviorSubject(0);
  maxValueScrolled: BehaviorSubject<number> = new BehaviorSubject(0);
  resetMaxScroll = true;

  _maxScrolled = 0;
  constructor() {}

  scrollEvent = fromEvent(window, 'scroll').subscribe(() => this.keepTrack());

  keepTrack(): void {
    const viewHeight = window.innerHeight;

    const scrollValue = window.scrollY;

    const scrollPercent = this._get_scroll_percentage();

    this.valueScrolled.next(scrollPercent);
    this.percentScrolled.next(scrollPercent);

    if (scrollValue > this._maxScrolled) {
      this._maxScrolled = scrollValue;
      this.maxValueScrolled.next(this._maxScrolled);
    }
  }

  private isElementVisibleInViewport(elementId: string, percent = 0.5) {
    const element = document.getElementById(elementId);
    if (element === null) {
      return false;
    }
    const rect = element.getBoundingClientRect(),
      windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
    return !(
      Math.floor(1 - (rect.top >= 0 ? 0 : rect.top) / +-rect.height) <
        percent ||
      Math.floor(1 - (rect.bottom - windowHeight) / rect.height) < percent
    );
  }

  createIsVisibleInViewportObservable(elementId: string, percent = 0.5) {
    return new Observable((subscriber) => {
      const scrollSubscription = fromEvent(window, 'scroll').subscribe(() => {
        const value = this.isElementVisibleInViewport(elementId, percent);

        subscriber.next();
      });
      return () => {
        scrollSubscription.unsubscribe();
      };
    });
  }

  /**
   * Get current browser viewpane heigtht
   */
  private _get_window_height() {
    return (
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight ||
      0
    );
  }

  /**
   * Get current absolute window scroll position
   */
  private _get_window_Yscroll() {
    return (
      window.pageYOffset ||
      document.body.scrollTop ||
      document.documentElement.scrollTop ||
      0
    );
  }

  /**
   * Get current absolute document height
   */
  private _get_doc_height() {
    return Math.max(
      document.body.scrollHeight || 0,
      document.documentElement.scrollHeight || 0,
      document.body.offsetHeight || 0,
      document.documentElement.offsetHeight || 0,
      document.body.clientHeight || 0,
      document.documentElement.clientHeight || 0
    );
  }

  /**
   * Get current vertical scroll percentage
   */
  private _get_scroll_percentage() {
    return (
      ((this._get_window_Yscroll() + this._get_window_height()) /
        this._get_doc_height()) *
      100
    );
  }
}
