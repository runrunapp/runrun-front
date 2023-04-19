import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { Icons } from 'src/app/core/services/icons/icon.service';
import { LISTING_STATE } from '../../gestion/gestion.models';
import { PropertyType } from '../../publish/models/publish.models';

@Component({
  selector: 'app-profile-title',
  templateUrl: './profile-title.component.html',
  styleUrls: ['./profile-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileTitleComponent implements OnInit {
  @Input() title!: string;
  @Input() price!: number;
  @Input() roomNumber: number = 0;
  @Input() area: number = 0;
  @Input() currency!: string;
  @Input() propertyType!: PropertyType;
  @Input() address = '';
  @Input() neighborhood = '';
  @Input() municipality: string | null = '';
  @Input() province: string | null = '';
  @Input() lat!: number;
  @Input() lng!: number;
  @Input() state!: LISTING_STATE;
  @Input() allowShare: boolean = false;

  @Input() isOwner = false;
  @Input() hasVisit: boolean = false;
  @Input() isFavorite = false;
  @Input() isShared = false;
  @Input() isAuthenticated = false;
  @Output() setShare = new EventEmitter<boolean>();
  @Output() setFavorite = new EventEmitter<boolean>();
  @Output() requestVisit = new EventEmitter();
  constructor() {}

  icons = Icons;

  ngOnInit(): void {}

  onShareClick(state: boolean): void {
    this.setShare.emit(state);
  }

  addToFavorite(): void {
    this.setFavorite.emit(true);
  }
  removeFromFavorite(): void {
    this.setFavorite.emit(false);
  }

  onVisitClick(): void {
    if (!this.hasVisit) {
      this.hasVisit = true;
      this.requestVisit.emit();
    }
  }

  get propertyTypeDisplay() {
    const propertyTypesDict = {
      [PropertyType.HOUSE]: 'Vivienda',
      [PropertyType.ROOM]: 'Habitación',
      [PropertyType.OFFICE]: 'Oficina',
      [PropertyType.LOCAL]: 'Local',
      [PropertyType.GARAGE]: 'Garaje',
    };
    return propertyTypesDict[this.propertyType];
  }

  get isHouse() {
    return this.propertyType === PropertyType.HOUSE;
  }

  capitalize(str: string | null): string | null {
    if (str) {
      return str[0].toUpperCase() + str.slice(1);
    }
    return str;
  }
}
