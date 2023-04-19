import { ToastrService } from 'ngx-toastr';
import { switchMap } from 'rxjs/operators';
import { GestionService } from './../gestion.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  Inject,
} from '@angular/core';
import { Icons } from 'src/app/core/services/icons/icon.service';
import { combineLatest, EMPTY } from 'rxjs';

@Component({
  selector: 'app-add-document-dialog',
  templateUrl: './add-document-dialog.component.html',
  styleUrls: ['./add-document-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddDocumentDialog implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddDocumentDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.type = data.type;
  }

  ngOnInit(): void {}

  title: string = '';
  document: any = null;
  public = false;
  submitted = false;
  type!: 'contract' | 'receipt' | 'legal';
  ammount: number = 0;

  onChangeDocument(event: any) {
    this.document = event.target.files[0];
  }

  onClose() {
    this.submitted = true;
    if (this.title && this.document) {
      this.dialogRef.close({
        title: this.title,
        document: this.document,
        public: this.public,
        ammount: this.ammount,
      });
    }
  }
}

@Component({
  selector: 'app-add-document-form',
  templateUrl: './add-document-form.component.html',
  styleUrls: ['./add-document-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddDocumentFormComponent implements OnInit {
  @Input() type!: 'contract' | 'receipt' | 'legal';
  @Input() listing!: string;
  @Input() message: string = 'Añadir documento';
  @Output() upload = new EventEmitter();
  icons = Icons;
  constructor(
    private dialog: MatDialog,
    private gestionService: GestionService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {}

  onClick() {
    const dialogRef = this.dialog.open(AddDocumentDialog, {
      disableClose: true,
      data: {
        type: this.type,
      },
    });

    dialogRef
      .afterClosed()
      .pipe(
        switchMap((data) => {
          if (data) {
            return this.gestionService.uploadDocument(
              data.title,
              this.type,
              data.document,
              this.listing,
              data.public
            );
          }
          return EMPTY;
        })
      )
      .subscribe(
        (response) => {
          this.toastrService.success('Documnento subido correctamente');
          this.upload.emit();
        },
        (error) => {
          this.toastrService.error(
            'Problemas al subir el documentos:\n',
            error
          );
        }
      );
  }
}
