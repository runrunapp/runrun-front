import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-publish-form-conditions',
  templateUrl: './publish-form-conditions.component.html',
  styleUrls: ['./publish-form-conditions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublishFormConditionsComponent implements OnInit {
  @Input() formCommon!: FormGroup;
  @Output() finished = new EventEmitter();
  @Output() back = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onSubmit(e: Event): void {
    this.finished.emit();
  }
}
