import { AcceptCancelDialogComponent } from './../accept-cancel-dialog/accept-cancel-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ListingManager } from './../gestion.models';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, Observable, EMPTY } from 'rxjs';
import { takeUntil, switchMap } from 'rxjs/operators';
import { User } from '../../authentication/authentication.models';
import { ListingDocument, Receipt } from '../gestion.models';
import { GestionService } from '../gestion.service';
import { Store, select } from '@ngrx/store';
import { AppState, AuthenticationSelectors } from 'src/app/root-store';

@Component({
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss'],
})
export class ContractsComponent implements OnInit, OnDestroy {
  contracts$!: Observable<ListingDocument[]>;
  receipts$!: Observable<Receipt[]>;
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

  ngOnInit(): void {
    this.user$ = this.store.pipe(select(AuthenticationSelectors.selectUser));
    this.activatedRoute.paramMap
      .pipe(takeUntil(this._onDestroy))
      .subscribe((params) => {
        const id = params.get('id');
        if (id) {
          this.listing = id;
          this.manager$ = this.gestionService.getListingManager(id);
          this.contracts$ = this.gestionService.getListingContracts(id);
          this.receipts$ = this.gestionService.getListingReceipts(id);
        }
      });
  }

  refresh() {
    this.contracts$ = this.gestionService.getListingContracts(this.listing);
  }

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

  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
}
