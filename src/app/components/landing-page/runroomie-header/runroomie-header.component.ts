import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { URLs } from 'src/app/app.constants';
import { Icons } from 'src/app/core/services/icons/icon.service';

@Component({
  selector: 'app-runroomie-header',
  templateUrl: './runroomie-header.component.html',
  styleUrls: ['./runroomie-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RunroomieHeaderComponent implements OnInit {
  constructor() {}
  Icons = Icons;
  runroomieURL = URLs.runroomie;

  ngOnInit(): void {}
}
