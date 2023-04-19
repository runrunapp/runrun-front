import { propertyTypeDisplay } from './../../../shared/utils';
import {
  AfterViewInit,
  Component,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatExpansionPanel } from '@angular/material/expansion';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { URLs } from 'src/app/app.constants';
import { AppState, AuthenticationSelectors } from 'src/app/root-store';
import { Icons } from '../../services/icons/icon.service';
import { User } from '../authentication/authentication.models';
import { PublishService } from '../publish/services/publish.service';
import { AcceptCancelDialogComponent } from './accept-cancel-dialog/accept-cancel-dialog.component';
import { ListingManager, LISTING_STATE, TenantManager } from './gestion.models';
import { GestionService } from './gestion.service';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss'],
})
export class GestionComponent implements OnInit, AfterViewInit {
  constructor(
    private store: Store<AppState>,
    private gestionService: GestionService,
    private publishService: PublishService,
    private dialog: MatDialog
  ) {}
  user$!: Observable<User | null>;
  listingManagers$!: Observable<ListingManager[]>;

  @ViewChildren(MatExpansionPanel) panels!: QueryList<MatExpansionPanel>;
  openedPanel!: number;

  LISTING_STATE = LISTING_STATE;
  icons = Icons;

  listingURL = URLs.profileURL;
  editListingURL = URLs.editListingURL;

  ngOnInit(): void {
    this.user$ = this.store.pipe(select(AuthenticationSelectors.selectUser));
    this.listingManagers$ = this.gestionService.getListingManagers();
  }

  ngAfterViewInit(): void {
    this.openedPanel = 0;
  }

  setOpened(id: number): void {
    this.openedPanel = id;
  }

  setListingName(listing: number, event: any): void {
    const value = event.target.value;
    this.gestionService
      .setListingName(listing, value)
      .subscribe
      // TODO handle subscription
      ();
  }

  refreshData(): void {
    this.listingManagers$ = this.gestionService.getListingManagers();
  }

  handleDelete(id: number): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.position = {
      bottom: '0',
      // 'left': '50%',
      // 'right': '50%',
    };
    dialogConfig.panelClass = 'dialog-panel';
    dialogConfig.backdropClass = 'dialog-backdrop';
    dialogConfig.data = {
      message: '¿Seguro que desea eliminar este inmueble?',
    };
    const ref: MatDialogRef<AcceptCancelDialogComponent> = this.dialog.open(
      AcceptCancelDialogComponent,
      dialogConfig
    );

    ref.afterClosed().subscribe((data) => {
      if (data.clicked === 'Ok') {
        this.publishService.deleteListing(id).subscribe((r) => {
          this.refreshData();
        });
      }
    });
  }

  propertyTypeDisplay = propertyTypeDisplay;

  getRemainingPaymentDays(paymentDay: number | null | undefined) {
    if (!paymentDay) {
      return null;
    }
    const today = new Date();
    const day = today.getDate();
    if (day > paymentDay) return 30 - day + paymentDay;
    return paymentDay - day;
  }
}
