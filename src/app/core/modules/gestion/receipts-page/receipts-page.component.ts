import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Icons } from 'src/app/core/services/icons/icon.service';
import { Receipt } from '../gestion.models';
import { GestionService } from '../gestion.service';

@Component({
  templateUrl: './receipts-page.component.html',
  styleUrls: ['./receipts-page.component.scss'],
})
export class ReceiptsPageComponent implements OnInit {
  constructor(
    private gestionService: GestionService,
    private activatedRoute: ActivatedRoute
  ) {}

  get currentReceipts() {
    return this.receipts.filter((r) => {
      r.createdAt = new Date(r.createdAt);

      return (
        r.createdAt.getMonth() === this.date.getMonth() &&
        r.createdAt.getFullYear() === this.date.getFullYear()
      );
    });
  }
  @Input() receipts: Receipt[] = [];
  @Input() date: Date = new Date();

  ICONS = Icons;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.gestionService
          .getReceipt(Number.parseInt(id))
          .subscribe((response) => {
            this.receipts = response;
          });
      }
    });
  }

  increaseDate(): void {
    this.date.setMonth(this.date.getMonth() + 1);
    this.date = new Date(this.date);
    // this.cdr.markForCheck()
  }
  decreaseDate(): void {
    this.date.setMonth(this.date.getMonth() - 1);
    this.date = new Date(this.date);
    // this.cdr.markForCheck()
  }

  capitalize(str: string | null): string {
    if (str) {
      return str[0].toUpperCase() + str.slice(1);
    }
    return '';
  }
}
