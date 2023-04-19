import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-landing-plus',
  templateUrl: './landing-plus.component.html',
  styleUrls: ['./landing-plus.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPlusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
