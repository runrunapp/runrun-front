import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-filter-button',
  templateUrl: './filter-button.component.html',
  styleUrls: ['./filter-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterButtonComponent implements OnInit {
  // @Input() icon: string = "unfold_more";
  @Input() text = '';
  @Input() active = false;
  @Output() click = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}

  onClick(event: Event): void {
    event.stopPropagation();
    this.click.emit(this.active);
  }
}
