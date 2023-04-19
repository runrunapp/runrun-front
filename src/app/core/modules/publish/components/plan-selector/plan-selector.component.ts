import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PlanType } from '../../models/publish.models';
import { URLs } from 'src/app/app.constants';

@Component({
  templateUrl: './plan-selector.component.html',
  styleUrls: ['./plan-selector.component.scss'],
})
export class PlanSelectorComponent implements OnInit {
  planType: PlanType | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSelect(value: PlanType): void {
    this.planType = value;
  }

  onContinue(): void {
    this.router.navigate([URLs.publishNewURL], {
      queryParams: {
        planType: this.planType,
      },
    });
  }
}
