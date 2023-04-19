import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { URLs } from 'src/app/app.constants';
import { Cite } from 'src/app/core/models/cite.models';

@Component({
  selector: 'app-visit-request-card',
  templateUrl: './visit-request-card.component.html',
  styleUrls: ['./visit-request-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VisitRequestCardComponent implements OnInit {
  @Input() visitRequest!: Cite;
  @Output() approve = new EventEmitter();
  @Output() reject = new EventEmitter();

  urls = URLs;

  constructor() {}

  ngOnInit(): void {}

  onApprove() {
    this.approve.emit();
  }
  onReject() {
    this.reject.emit();
  }
}
