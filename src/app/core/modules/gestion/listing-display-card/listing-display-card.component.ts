import { ToastrService } from 'ngx-toastr';
import { GestionService } from './../gestion.service';
import { AcceptCancelDialogComponent } from './../accept-cancel-dialog/accept-cancel-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { URLs } from 'src/app/app.constants';
import { LISTING_STATE } from '../gestion.models';
import { Router } from '@angular/router';
import { PlanType } from '../../publish/models/publish.models';

@Component({
  selector: 'app-listing-display-card',
  templateUrl: './listing-display-card.component.html',
  styleUrls: ['./listing-display-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListingDisplayCardComponent implements OnInit {
  @Input() image!: string;
  @Input() title!: string;
  @Input() propertyType!: string;
  @Input() remainingDaysForPayment: number | null = null;
  @Input() status!: LISTING_STATE;
  @Input() visitRequestCount!: number;
  @Input() id!: number;
  @Input() planType!: PlanType;
  @Output() refresh = new EventEmitter();
  urls = URLs;

  get is_free() {
    return this.status === LISTING_STATE.LIBRE;
  }

  constructor(
    private dialog: MatDialog,
    private gestionService: GestionService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSetFree(event: Event) {
    event.stopPropagation();
    const dialogRef = this.dialog.open(AcceptCancelDialogComponent, {
      data: {
        message:
          'Seguro que desea desocupar este inmueble. Se terminará la reservación actual',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result?.clicked == 'Ok') {
        this.gestionService.markAsFree(this.id).subscribe(
          (response) => {
            this.toastrService.success(
              'Disponibilidad cambiada satisfactoriamente'
            );
            this.refresh.emit();
          },
          (error) => {
            this.toastrService.error('Ocurrió un error inesperado');
          }
        );
      }
    });
  }
}
