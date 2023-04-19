import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkgroup',
  templateUrl: './checkgroup.component.html',
  styleUrls: ['./checkgroup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckgroupComponent implements OnInit {
  @Input() label!: string;
  @Input() formGroup!: FormGroup;
  @Input() values!: { value: string; checked: string }[];
  @Input() vertical = false;
  constructor() {}

  ngOnInit(): void {}
}
