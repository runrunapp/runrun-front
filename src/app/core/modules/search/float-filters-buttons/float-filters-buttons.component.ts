import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';
import { Icons } from 'src/app/core/services/icons/icon.service';

@Component({
  selector: 'app-float-filters-buttons',
  templateUrl: './float-filters-buttons.component.html',
  styleUrls: ['./float-filters-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FloatFiltersButtonsComponent implements OnInit {
  @Output() mapOpen = new EventEmitter<boolean>();
  panelOpened = [false, false, false];

  get isPanelOpened() {
    return this.panelOpened[0] || this.panelOpened[1];
  }

  get searchOpened() {
    return this.panelOpened[2];
  }
  get mapOpened() {
    return this.panelOpened[1];
  }

  get filtersOpened() {
    return this.panelOpened[0];
  }

  constructor() {}

  ngOnInit(): void {}

  handleButtonClick(index: number): void {
    this.panelOpened.forEach((_, i) => {
      if (i === index) {
        this.panelOpened[i] = !this.panelOpened[i];
      } else {
        this.panelOpened[i] = false;
      }
    });

    this.mapOpen.emit(this.mapOpened);
  }

  icons = Icons;
}
