import { Component, OnInit } from '@angular/core';
import { URLs } from 'src/app/app.constants';
import { Icons } from 'src/app/core/services/icons/icon.service';

@Component({
  selector: 'landing-buttons',
  templateUrl: './landing-buttons.component.html',
  styleUrls: ['./landing-buttons.component.scss'],
})
export class LandingButtonsComponent implements OnInit {
  constructor() {}
  searchOpen = true;
  publishURL = URLs.publishURL;
  feedURL = URLs.feedURL;
  icons = Icons;
  ngOnInit(): void {}
}
