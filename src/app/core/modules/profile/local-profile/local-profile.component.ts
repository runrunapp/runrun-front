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
  selector: 'app-local-profile',
  templateUrl: './local-profile.component.html',
  styleUrls: ['./local-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocalProfileComponent implements OnInit {
  @Input() local!: Listing;
  constructor() {}
  icons = Icons;
  ngOnInit(): void {}

  localLocationDispllay(localLocation: OfficeLocation | undefined) {
    if (localLocation == OfficeLocation.INTERIOR) {
      return 'Ubicado en interiores';
    }

    return 'A pie de calle';
  }
}
