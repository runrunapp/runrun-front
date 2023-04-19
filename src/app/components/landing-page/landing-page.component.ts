import { Component, OnInit } from '@angular/core';
import {
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  fadeOutRight,
  rotateIn,
} from 'ng-animate';
import { fadeSlideInOut } from 'src/app/animations/fadeInOut.animation';
import { URLs } from 'src/app/app.constants';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  animations: [fadeSlideInOut],
})
export class LandingPageComponent implements OnInit {
  constructor() {}

  runroomieURL = URLs.runroomie;

  // Animations
  fadeInLeft = fadeInLeft;
  fadeInRight = fadeInRight;
  fadeInUp = fadeInUp;
  fadeOutRight = fadeOutRight;
  rotateIn = rotateIn;

  ngOnInit(): void {}
}
