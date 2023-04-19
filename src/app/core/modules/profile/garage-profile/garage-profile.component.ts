import { GarageCapacity } from './../../publish/models/publish.models';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Listing } from '../../search/listing.models';
import { Icons } from 'src/app/core/services/icons/icon.service';

@Component({
  selector: 'app-garage-profile',
  templateUrl: './garage-profile.component.html',
  styleUrls: ['./garage-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GarageProfileComponent implements OnInit {
  @Input() garage!: Listing;
  constructor() {}

  ngOnInit(): void {}

  icons = Icons;

  garageCapacityDisplay(garageCapacity: GarageCapacity | undefined) {
    switch (garageCapacity) {
      case GarageCapacity.SMALL_CAR:
        return 'Auto pequeño';
      case GarageCapacity.MEDIUM_CAR:
        return 'Auto mediano';
      case GarageCapacity.BIG_CAR:
        return 'Auto grande';
    }
    return '';
  }
}
