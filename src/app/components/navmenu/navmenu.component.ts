import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState, AuthenticationSelectors } from '../../root-store';
import { Router } from '@angular/router';
import { URLs  } from 'src/app/app.constants';

@Component({
  selector: 'app-navmenu',

  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.scss'],
})
export class NavmenuComponent implements OnInit {
  @Output() linkClicked = new EventEmitter<string>();
  user$ = this.store.pipe(
    select(AuthenticationSelectors.selectUser)
  );
  constructor(private store: Store<AppState>, private router: Router) {}
  ngOnInit(): void {

  }

  navigate(path: string): void {
    this.linkClicked.emit(path);
    this.router.navigateByUrl(path);
  }

  loginURL = URLs.loginURL
  signupURL = URLs.signupURL
  publishURL = URLs.publishURL
  logoutURL = URLs.logoutURL
  blogURL = URLs.blogURL
  runroomieURL = URLs.runroomie
  feedURL = URLs.feedURL
  chatsURL = URLs.chatURL
  gestionURL = URLs.gestionURL
}
