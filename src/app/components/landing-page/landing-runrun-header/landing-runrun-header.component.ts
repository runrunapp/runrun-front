import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-landing-runrun-header',
  templateUrl: './landing-runrun-header.component.html',
  styleUrls: ['./landing-runrun-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingRunrunHeaderComponent implements OnInit {
  @Input() searchBar!: boolean;
  constructor() {}

  ngOnInit(): void {}
}
