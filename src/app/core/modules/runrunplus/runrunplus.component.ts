import { URLs } from 'src/app/app.constants';
import { Component, OnInit } from '@angular/core';
import { Icons } from '../../services/icons/icon.service';

@Component({
  selector: 'app-runrunplus',
  templateUrl: './runrunplus.component.html',
  styleUrls: ['./runrunplus.component.scss'],
})
export class RunrunplusComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  icons = Icons;
  urls = URLs;
}
