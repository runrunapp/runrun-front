import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Icons } from 'src/app/core/services/icons/icon.service';
import { OfficeLocation } from '../../publish/models/publish.models';
import { Listing } from '../../search/listing.models';

@Component({
  selector: 'app-office-profile',
  templateUrl: './office-profile.component.html',
  styleUrls: ['./office-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OfficeProfileComponent implements OnInit {
  @Input() office!: Listing;
  constructor() {}

  icons = Icons;

  ngOnInit(): void {}

  officeLocationDispllay(officeLocation: OfficeLocation | undefined) {
    if (officeLocation == OfficeLocation.INTERIOR) {
      return 'Ubicado en interiores';
    }

    return 'A pie de calle';
  }
}
