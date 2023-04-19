import { MatDialog } from '@angular/material/dialog';
import { switchMap, takeUntil } from 'rxjs/operators';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, Observable, Subject } from 'rxjs';
import { ListingDocument, ListingManager } from '../gestion.models';
import { GestionService } from '../gestion.service';
import { select, Store } from '@ngrx/store';
import { AppState, AuthenticationSelectors } from 'src/app/root-store';
import { User } from '../../authentication/authentication.models';
import { AcceptCancelDialogComponent } from '../accept-cancel-dialog/accept-cancel-dialog.component';

@Component({
  templateUrl: './legals.component.html',
  styleUrls: ['./legals.component.scss'],
})
export class LegalsComponent implements OnInit, OnDestroy {
  legals$!: Observable<ListingDocument[]>;
  _onDestroy = new Subject();
  listing!: string;
  user$!: Observable<User | null>;
  manager$!: Observable<ListingManager>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private gestionService: GestionService,
    private store: Store<AppState>,
    private dialog: MatDialog
  ) {}

  onRemove(document: ListingDocument) {
    const dialogRef = this.dialog.open(AcceptCancelDialogComponent, {
      data: {
        message:
          'Seguro que desea eliminar el documento. Esta acción es irreversible.',
      },
    });

    dialogRef
      .afterClosed()
      .pipe(
        switchMap((result) => {
          if (result.clicked == 'Ok') {
            return this.gestionService.removeDocument(document);
          } else {
            return EMPTY;
          }
        })
      )
      .subscribe(
        (response) => {
          this.refresh();
        },
        (error) => {
          console.log(error);
        }
      );
  }

  ngOnInit(): void {
    this.user$ = this.store.pipe(select(AuthenticationSelectors.selectUser));
    this.activatedRoute.paramMap
      .pipe(takeUntil(this._onDestroy))
      .subscribe((params) => {
        const id = params.get('id');
        if (id) {
          this.listing = id;
          this.manager$ = this.gestionService.getListingManager(id);
          this.legals$ = this.gestionService.getListingLegals(id);
        }
      });
  }

  refresh() {
    this.legals$ = this.gestionService.getListingLegals(this.listing);
  }

  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
}
