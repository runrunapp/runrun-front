import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Collection } from 'src/app/core/modules/search/listing.models';

@Component({
  selector: 'app-listing-collection',
  templateUrl: './listing-collection.component.html',
  styleUrls: ['./listing-collection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListingCollectionComponent implements OnInit {
  @Input() collection!: Collection;

  constructor() {}

  ngOnInit(): void {}
}
