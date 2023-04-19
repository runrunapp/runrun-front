import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Icons } from 'src/app/core/services/icons/icon.service';

interface Option {
  value: boolean;
  label: string;
}

@Component({
  selector: 'app-checked-list',
  templateUrl: './checked-list.component.html',
  styleUrls: ['./checked-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckedListComponent implements OnInit {
  @Input() values: Option[] = [];
  constructor() {}

  checkIcon = Icons.CHECK;

  ngOnInit(): void {}
}
