import { RunroomieShareDialogComponent } from './runroomie-share-dialog/runroomie-share-dialog.component';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscription, combineLatest } from 'rxjs';
import { map, take, withLatestFrom } from 'rxjs/operators';
import { URLs } from 'src/app/app.constants';
import {
  AddressActions,
  AddressSelectors,
  AppState,
  AuthenticationActions,
  AuthenticationSelectors,
} from 'src/app/root-store';
import {
  ListingActions,
  ListingSelectors,
} from 'src/app/root-store/listing-store';
import { User } from '../authentication/authentication.models';
import { BaseRunroomiePost } from '../runroomie/runroomie.models';
import { RunroomieService } from '../runroomie/runroomie.service';
import { Listing } from '../search/listing.models';
import { ListingService } from '../search/listing.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  listing$: Observable<Listing | undefined> = this.store.pipe(
    select(ListingSelectors.selectActiveListing)
  );
  recommended!: Observable<Listing[]>;
  similars!: Observable<Listing[]>;
  user$!: Observable<User | null>;
  municipality$ = this.listing$.pipe(
    withLatestFrom(this.store.pipe(select(AddressSelectors.selectStates))),
    map(([listing, states]) => {
      if (listing) {
        for (let state of states) {
          for (let municipality of state.cities) {
            if (municipality.id == listing.municipality) {
              return municipality.name;
            }
          }
        }
      }
      return null;
    })
  );
  province$ = this.listing$.pipe(
    withLatestFrom(this.store.pipe(select(AddressSelectors.selectStates))),
    map(([listing, states]) => {
      if (listing) {
        for (let state of states) {
          for (let municipality of state.cities) {
            if (municipality.id == listing.municipality) {
              return state.name;
            }
          }
        }
      }
      return null;
    })
  );

  subscriptions: Subscription[] = [];
  id: any;
  constructor(
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private listingService: ListingService,
    private runroomieService: RunroomieService,
    private toastrService: ToastrService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.activatedRoute.paramMap.subscribe((params) => {
        this.id = params.get('id');
        if (this.id) {
          this.store.dispatch(
            ListingActions.setActiveListing({ id: Number.parseInt(this.id) })
          );
        }
      })
    );
    this.store.dispatch(AddressActions.requestStates());

    this.recommended = this.store.pipe(
      select(ListingSelectors.selectRecommended)
    );
    this.similars = this.store.pipe(select(ListingSelectors.selectSimilars));
    this.user$ = this.store.pipe(select(AuthenticationSelectors.selectUser));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  onSetShare(state: boolean, listing: number): void {
    if (state) {
      const dialogRef = this.dialog.open(RunroomieShareDialogComponent, {
        panelClass: 'runroomie-share-dialog-panel',
        hasBackdrop: true,
        disableClose: true,
        backdropClass: 'runroomie-share-dialog',
        data: {
          text: '',
        },
      });
      dialogRef.afterClosed().subscribe((results) => {
        this.runroomieService.shareListing(listing, results).subscribe(
          (response) => {
            this.store.dispatch(AuthenticationActions.updateUser());
          },
          (error) => {
            // TODO hanlde error response
          }
        );
      });
      // this.router.navigate([URLs.runroomieForm, this.id]);
    } else {
      this.user$.pipe(take(1)).subscribe((user) => {
        if (user) {
          this.listing$.pipe(take(1)).subscribe((listing) => {
            if (listing) {
              if (user.runroomiePosts) {
                for (const post of user.runroomiePosts) {
                  if (post.listing === listing.id) {
                    this.runroomieService.removePost(post.id).subscribe(
                      (respone) => {
                        this.store.dispatch(AuthenticationActions.updateUser());
                      },
                      (error) => {}
                    );
                  }
                }
              }
            }
          });
        }
      });
    }
  }
  // Add to users favorites or remove
  onSetFavorite(state: boolean): void {
    if (state) {
      this.listingService.addToFavorite(this.id).subscribe(
        (r) => {
          this.store.dispatch(AuthenticationActions.updateUser());
        },
        (e) => {}
      );
    } else {
      this.listingService.removeFromFavorite(this.id).subscribe(
        (r) => {
          this.store.dispatch(AuthenticationActions.updateUser());
        },
        (e) => {}
      );
    }
  }

  // Handle visits

  onRequestVisit(date: Date): void {
    this.listingService.createCite(this.id).subscribe(
      (response) => {
        this.store.dispatch(AuthenticationActions.updateUser());
      },
      (error) => {
        if (error.status == 400) {
          if (error.error.nonFieldErrors) {
            this.toastrService.error(
              'Ya existe una solicitud de visita para este inmueble'
            );
          }
        }
      }
    );
  }
}
