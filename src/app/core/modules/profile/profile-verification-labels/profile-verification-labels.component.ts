import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-profile-verification-labels',
  templateUrl: './profile-verification-labels.component.html',
  styleUrls: ['./profile-verification-labels.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileVerificationLabelsComponent implements OnInit {
  @Input() isPlus = false;
  constructor() { }

  ngOnInit(): void {
  }

}
