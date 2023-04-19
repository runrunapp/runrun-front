import { Icons } from 'src/app/core/services/icons/icon.service';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Listing } from '../../search/listing.models';
import { BathType, BedType } from '../../publish/models/publish.models';

@Component({
  selector: 'app-room-profile',
  templateUrl: './room-profile.component.html',
  styleUrls: ['./room-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomProfileComponent implements OnInit {
  @Input() room!: Listing;
  constructor() {}
  icons = Icons;
  ngOnInit(): void {}

  bedTypeDisplay(bedType: BedType | undefined) {
    switch (bedType) {
      case BedType.NO:
        return 'Sin camas';
      case BedType.SINGLE:
        return 'Cama individual';
      case BedType.DOUBLE:
        return 'Cama doble';
      case BedType.TWO:
        return 'Dos camas';
    }
    return '';
  }

  bathTypeDisplay(bathType: BathType | undefined) {
    switch (bathType) {
      case BathType.PRIVED:
        return 'Baño privado';
      case BathType.SHARED:
        return 'Baño compartido';
    }
    return '';
  }
}
