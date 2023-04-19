import { TenantManager } from './../gestion.models';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { propertyTypeDisplay } from 'src/app/shared/utils';

@Component({
  selector: 'app-tenant-manager-card',
  templateUrl: './tenant-manager-card.component.html',
  styleUrls: ['./tenant-manager-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TenantManagerCardComponent implements OnInit {
  @Input() manager!: TenantManager;

  constructor() {}

  ngOnInit(): void {}

  getRemainingPaymentDays(paymentDay: number | null | undefined) {
    if (!paymentDay) {
      return null;
    }
    const today = new Date();
    const day = today.getDate();
    if (day > paymentDay) return 30 - day + paymentDay;
    return paymentDay - day;
  }

  propertyTypeDisplay = propertyTypeDisplay;
}
