import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Icons } from 'src/app/core/services/icons/icon.service';
import { Listing } from '../../search/listing.models';

@Component({
  selector: 'app-house-profile',
  templateUrl: './house-profile.component.html',
  styleUrls: ['./house-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HouseProfileComponent implements OnInit {
  @Input() house!: Listing;
  constructor() {}
  icons = Icons;
  ngOnInit(): void {}
}
