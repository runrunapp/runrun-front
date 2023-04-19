import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { GestionService } from './../gestion.service';
import { switchMap, takeUntil } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, Observable, EMPTY } from 'rxjs';
import { ListingManager } from '../gestion.models';
import { propertyTypeDisplay } from 'src/app/shared/utils';
import { Icons } from 'src/app/core/services/icons/icon.service';
import { URLs } from 'src/app/app.constants';
import { response } from 'express';
import { AcceptCancelDialogComponent } from '../accept-cancel-dialog/accept-cancel-dialog.component';

@Component({
  templateUrl: './listing-manager.component.html',
  styleUrls: ['./listing-manager.component.scss'],
})
export class ListingManagerComponent implements OnInit {
  manager$!: Observable<ListingManager>;
  _onDestroy = new Subject();
  id!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private gestionService: GestionService,
    private toastrService: ToastrService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(takeUntil(this._onDestroy))
      .subscribe((params) => {
        const id = params.get('id');

        if (id) {
          this.id = id;
          this.manager$ = this.gestionService.getListingManager(id);
        }
      });
  }
  urls = URLs;
  propertyTypeDisplay = propertyTypeDisplay;
  icons = Icons;
  getRemainingPaymentDays(paymentDay: number | null | undefined) {
    if (!paymentDay) {
      return null;
    }
    const today = new Date();
    const day = today.getDate();
    if (day > paymentDay) return 30 - day + paymentDay;
    return paymentDay - day;
  }

  incidenceMessage = '';

  onRefresh() {
    this.manager$ = this.gestionService.getListingManager(this.id);
  }

  onSendIncidence() {
    this.gestionService
      .createIncidence(this.id, this.incidenceMessage)
      .subscribe(
        (response) => {
          this.incidenceMessage = '';
          this.toastrService.success('Incidencia enviada correctamente');
        },
        (error) => {
          this.toastrService.error('Ocurrio un error con su solicitud');
        }
      );
  }

  onPlanUpgrade() {
    const dialogRef = this.dialog.open(AcceptCancelDialogComponent, {
      data: { message: '¿Está seguro de que desea actualizar el plan?' },
    });

    dialogRef
      .afterClosed()
      .pipe(
        switchMap((result) => {
          if (result.clicked === 'Ok') {
            return this.gestionService.upgradePlan(this.id);
          } else {
            return EMPTY;
          }
        })
      )
      .subscribe(
        (response) => {
          this.toastrService.success(
            'Un administrador revisará su solicitud y se pondrá en contacto con usted'
          );
          this.onRefresh();
        },
        (error) => {
          this.toastrService.error('Ocurrio un error con su solicitud');
        }
      );
  }
}
