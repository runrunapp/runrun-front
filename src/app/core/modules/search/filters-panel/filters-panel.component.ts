import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Icons } from 'src/app/core/services/icons/icon.service';

@Component({
  selector: 'app-filters-panel',
  templateUrl: './filters-panel.component.html',
  styleUrls: ['./filters-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltersPanelComponent implements OnInit {
  constructor() {}
  @Input() form!: FormGroup;
  @Output() mapOpen = new EventEmitter<boolean>();

  isMapOpen = false;

  icons = Icons;

  ngOnInit(): void {}

  toggleMap(): void {
    this.isMapOpen = !this.isMapOpen;
    this.mapOpen.emit(this.isMapOpen);
  }
}
