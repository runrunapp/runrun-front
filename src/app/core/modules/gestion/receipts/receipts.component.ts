import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { takeUntil, switchMap } from 'rxjs/operators';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, Observable, Subject } from 'rxjs';
import { ListingDocument, ListingManager, Receipt } from '../gestion.models';
import { GestionService } from '../gestion.service';
import { User } from '../../authentication/authentication.models';
import { select, Store } from '@ngrx/store';
import { AppState, AuthenticationSelectors } from 'src/app/root-store';
import { AddReceiptDialogComponent } from '../add-receipt-dialog/add-receipt-dialog.component';

@Component({
  templateUrl: './receipts.component.html',
  styleUrls: ['./receipts.component.scss'],
})
export class ReceiptsComponent implements OnInit, OnDestroy {
  receipts$!: Observable<Receipt[]>;
  info_receipts$!: Observable<ListingDocument[]>;
  listing!: string;
  _onDestroy = new Subject();
  user$!: Observable<User | null>;
  manager$!: Observable<ListingManager>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private gestionService: GestionService,
    private toastrService: ToastrService,
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
          this.receipts$ = this.gestionService.getListingReceipts(id);
          this.info_receipts$ = this.gestionService.getListingInfoReceipts(
            this.listing
          );
        }
      });
  }

  refresh() {
    this.receipts$ = this.gestionService.getListingReceipts(this.listing);
    this.info_receipts$ = this.gestionService.getListingInfoReceipts(
      this.listing
    );
  }

  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  onAdd(isTenant: boolean) {
    const dialogRef = this.dialog.open(AddReceiptDialogComponent, {
      data: { isTenant },
    });

    dialogRef
      .afterClosed()
      .pipe(
        switchMap((result) => {
          if (result) {
            if (result.type === 'info') {
              return this.gestionService.uploadDocument(
                result.description,
                'receipt',
                result.file,
                this.listing,
                true
              );
            }

            return this.gestionService.createReceipt(
              this.listing,
              result.description,
              result.amount,
              result.currency,
              result.file,
              result.share
            );
          }
          return EMPTY;
        })
      )
      .subscribe(
        (response) => {
          this.toastrService.success('Recibo creado');
          this.refresh();
        },
        (error) => {
          this.toastrService.error('Error al crear el recibo');
        }
      );
  }
}
