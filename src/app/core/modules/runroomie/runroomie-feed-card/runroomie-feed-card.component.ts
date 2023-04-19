import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { URLs } from 'src/app/app.constants';
import { Icons } from 'src/app/core/services/icons/icon.service';
import {
  AppState,
  AuthenticationActions,
  AuthenticationSelectors,
} from 'src/app/root-store';
import {
  ListingActions,
  ListingSelectors,
} from 'src/app/root-store/listing-store';
import { UsersActions, UsersSelectors } from 'src/app/root-store/users-store';
import { User } from '../../authentication/authentication.models';
import { Listing } from '../../search/listing.models';
import { BaseRunroomiePost } from '../runroomie.models';
import { RunroomieService } from '../runroomie.service';

@Component({
  selector: 'app-runroomie-feed-card',
  templateUrl: './runroomie-feed-card.component.html',
  styleUrls: ['./runroomie-feed-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RunroomieFeedCardComponent implements OnInit, OnDestroy {
  @Input() set userId(id: number) {
    this.user_id = id;

    this.store.dispatch(UsersActions.requestUser({ id }));

    this.user$ = this.store.pipe(select(UsersSelectors.selectUserById(id)));
  }
  @Input() set listingId(id: number) {
    this.listing_id = id;

    this.store.dispatch(ListingActions.requestListing({ id }));
    this.subscriptions.push(
      this.store
        .pipe(select(ListingSelectors.selectListingById(id)))
        .subscribe((listing) => {
          if (listing) {
            this.listing = listing;
            this.cd.markForCheck();
          } else {
          }
        })
    );
  }

  icons = Icons;

  constructor(
    private store: Store<AppState>,
    private runroomieService: RunroomieService,
    private cd: ChangeDetectorRef
  ) {}
  @Input() message!: string;
  @Input() postId = -1;
  avatar!: string;
  listing!: Listing;
  userName!: string;

  user_id!: number;
  listing_id!: number;

  @Input() currentUser$!: Observable<User | null>;
  user$!: Observable<User | undefined>;

  subscriptions: Subscription[] = [];

  userProfileURL = URLs.userProfileURL;
  listingURL = URLs.profileURL;

  ngOnInit(): void {
    this.currentUser$ = this.store.pipe(
      select(AuthenticationSelectors.selectUser)
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
  isOwner(posts: BaseRunroomiePost[] | undefined): boolean | undefined {
    return posts?.map((p) => p.id).includes(this.postId);
  }

  likePost(): void {
    this.runroomieService.likePost(this.postId).subscribe(
      (response) => {
        this.store.dispatch(AuthenticationActions.updateUser());
      },
      (error) => {
        // TODO handle error response
      }
    );
  }
  dislikePost(): void {
    this.runroomieService.dislikePost(this.postId).subscribe(
      (response) => {
        this.store.dispatch(AuthenticationActions.updateUser());
      },
      (error) => {
        // TODO handle error response
      }
    );
  }
}
