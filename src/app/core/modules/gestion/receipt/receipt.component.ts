import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Receipt } from '../gestion.models';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReceiptComponent implements OnInit {
  @Input() receipt!: Receipt
  constructor() { }

  ngOnInit(): void {
  }

}
