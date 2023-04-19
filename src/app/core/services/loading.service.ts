import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private loader: HTMLElement | null;
  constructor() {
    this.loader = document.getElementById('page-loader');
  }
  private numberOfRequests: number = 0;
  public showSpinner: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  handleRequest = (state: string = 'minus'): void => {
    this.numberOfRequests =
      state === 'plus' ? this.numberOfRequests + 1 : this.numberOfRequests - 1;
    this.showSpinner.next(this.numberOfRequests > 0);
  };

  spinnerActive: boolean = true;

  show() {
    if (this.loader) {
      this.loader.hidden = false;
    }
  }

  hide() {
    if (this.loader) {
      this.loader.hidden = true;
    }
  }
}
