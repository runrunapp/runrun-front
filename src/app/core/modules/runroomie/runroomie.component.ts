import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take, withLatestFrom } from 'rxjs/operators';
import { URLs } from 'src/app/app.constants';
import { AppState } from 'src/app/root-store';
import {
  ListingActions,
  ListingSelectors,
} from 'src/app/root-store/listing-store';
import { UsersActions, UsersSelectors } from 'src/app/root-store/users-store';
import { Icons } from '../../services/icons/icon.service';
import { BaseRunroomiePost } from './runroomie.models';
import { RunroomieService } from './runroomie.service';

@Component({
  selector: 'app-runroomie',
  templateUrl: './runroomie.component.html',
  styleUrls: ['./runroomie.component.scss'],
})
export class RunroomieComponent implements OnInit {
  posts$!: Observable<BaseRunroomiePost[]>;
  constructor(
    private runroomieService: RunroomieService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.posts$ = this.runroomieService.getPosts();
  }
  urls = URLs;
  icons = Icons;
}
