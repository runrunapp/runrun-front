import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  ChangeDetectionStrategy,
  Output,
} from '@angular/core';
import { Icons } from 'src/app/core/services/icons/icon.service';
import { User } from '../../authentication/authentication.models';
import { ListingManager, LISTING_STATE } from '../gestion.models';
import { URLs } from 'src/app/app.constants';
import {
  MatDialog,
  MatDialogRef,
  MatDialogConfig,
} from '@angular/material/dialog';
import { BusyDialogComponent } from '../busy-dialog/busy-dialog.component';
import { GestionService } from '../gestion.service';
import { AcceptCancelDialogComponent } from '../accept-cancel-dialog/accept-cancel-dialog.component';

@Component({
  selector: 'app-property-gestion',
  templateUrl: './property-gestion.component.html',
  styleUrls: ['./property-gestion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertyGestionComponent implements OnInit {
  // @Input() owner!: User
  constructor(
    private dialog: MatDialog,
    private gestionService: GestionService
  ) {}
  @Input() manager!: ListingManager;
  @Output() needRefresh = new EventEmitter();
  @Input() dialogOpened = false;
  todayDay = new Date().getDate();
  icons = Icons;

  LISTING_STATE = LISTING_STATE;

  usersURL = URLs.userProfileURL;
  chatURL = URLs.chatURL;

  ngOnInit(): void {}

  setBusy(manager: ListingManager): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.position = {
      bottom: '0',
      // 'left': '50%',
      // 'right': '50%',
    };
    dialogConfig.panelClass = 'dialog-panel';
    dialogConfig.backdropClass = 'dialog-backdrop';
    const ref: MatDialogRef<BusyDialogComponent> = this.dialog.open(
      BusyDialogComponent,
      dialogConfig
    );

    ref.afterClosed().subscribe((data) => {
      if (data.clicked === 'Ok') {
        this.gestionService
          .markAsBusy(manager.listing, data.start, data.end, data.user)
          .subscribe((response) => {
            this.needRefresh.emit();
          });
      }
    });
  }
  setFree(manager: ListingManager): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.position = {
      bottom: '0',
      // 'left': '50%',
      // 'right': '50%',
    };
    dialogConfig.panelClass = 'dialog-panel';
    dialogConfig.backdropClass = 'dialog-backdrop';
    dialogConfig.data = {
      message:
        'Mientras tu alojamiento esté libre será visible para todos los usuarios',
    };
    const ref: MatDialogRef<AcceptCancelDialogComponent> = this.dialog.open(
      AcceptCancelDialogComponent,
      dialogConfig
    );

    ref.afterClosed().subscribe((data) => {
      if (data.clicked === 'Ok') {
        this.gestionService
          .markAsFree(manager.listing)
          .subscribe((response) => {
            this.needRefresh.emit();
          });
      }
    });
  }

  setNotAvailable(manager: ListingManager): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.position = {
      bottom: '0',
      // 'left': '50%',
      // 'right': '50%',
    };
    dialogConfig.panelClass = 'dialog-panel';
    dialogConfig.backdropClass = 'dialog-backdrop';
    dialogConfig.data = {
      message:
        'Mientras tu alojamiento esté no disponible no será visible para los usuarios',
    };

    const ref: MatDialogRef<AcceptCancelDialogComponent> = this.dialog.open(
      AcceptCancelDialogComponent,
      dialogConfig
    );

    ref.afterClosed().subscribe((data) => {
      if (data.clicked === 'Ok') {
        this.gestionService
          .markAsNotAvailable(manager.listing)
          .subscribe((response) => {
            this.needRefresh.emit();
          });
      }
    });
  }
}
