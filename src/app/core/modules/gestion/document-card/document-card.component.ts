import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { ListingDocument } from '../gestion.models';

@Component({
  selector: 'app-document-card',
  templateUrl: './document-card.component.html',
  styleUrls: ['./document-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentCardComponent implements OnInit {
  @Input() document!: ListingDocument;
  @Output() remove = new EventEmitter<ListingDocument>();

  constructor() {}

  ngOnInit(): void {}

  removeDocument() {
    this.remove.emit(this.document);
  }
}
