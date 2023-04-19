import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-profile-spiner',
  templateUrl: './profile-spiner.component.html',
  styleUrls: ['./profile-spiner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileSpinerComponent implements OnInit {
  @Input() progress = 60;

  constructor() {}

  ngOnInit(): void {}
}
