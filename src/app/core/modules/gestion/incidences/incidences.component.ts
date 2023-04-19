import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, Observable, Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { Incidence } from '../gestion.models';
import { GestionService } from '../gestion.service';
import { AcceptCancelDialogComponent } from '../accept-cancel-dialog/accept-cancel-dialog.component';

@Component({
  templateUrl: './incidences.component.html',
  styleUrls: ['./incidences.component.scss'],
})
export class IncidencesComponent implements OnInit {
  listing!: string;
  _onDestroy = new Subject();
  incidences$!: Observable<Incidence[]>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private gestionService: GestionService,
    private dialog: MatDialog,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(takeUntil(this._onDestroy))
      .subscribe((params) => {
        const id = params.get('id');

        if (id) {
          this.listing = id;
          this.incidences$ = this.gestionService.getIncidences(id);
        }
      });
  }

  onSolve(incidence: Incidence) {
    const dialogRef = this.dialog.open(AcceptCancelDialogComponent, {
      data: {
        message:
          '¿Estás seguro de que quieres marcar como resuelta esta incidencia?',
      },
    });

    dialogRef
      .afterClosed()
      .pipe(
        switchMap((result) => {
          if (result?.clicked === 'Ok') {
            return this.gestionService.solveIncidence(incidence.id);
          } else {
            return EMPTY;
          }
        })
      )
      .subscribe(
        (response) => {
          this.toastrService.success('Incidencia resuelta correctamente');
          this.incidences$ = this.gestionService.getIncidences(this.listing);
        },
        (error) => {
          this.toastrService.error(
            'Ha ocurrido un error al resolver la incidencia'
          );
        }
      );
  }
}
