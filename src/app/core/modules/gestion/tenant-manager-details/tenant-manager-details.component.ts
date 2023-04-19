import { takeUntil } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { TenantManager } from '../gestion.models';
import { GestionService } from '../gestion.service';
import { URLs } from 'src/app/app.constants';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: './tenant-manager-details.component.html',
  styleUrls: ['./tenant-manager-details.component.scss'],
})
export class TenantManagerDetailsComponent implements OnInit {
  manager$!: Observable<TenantManager>;
  _onDestroy = new Subject();
  id!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private gestionService: GestionService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(takeUntil(this._onDestroy))
      .subscribe((params) => {
        const id = params.get('id');
        if (id) {
          this.id = id;
          this.manager$ = this.gestionService.getTenantManager(id);
        }
      });
  }
  urls = URLs;
  incidenceMessage = '';
  onSendIncidence(listing: number) {
    this.gestionService
      .createIncidence(listing.toString(), this.incidenceMessage)
      .subscribe(
        (response) => {
          this.incidenceMessage = '';
          this.toastrService.success('Incidencia enviada correctamente');
        },
        (error) => {
          this.toastrService.error('Ocurrio un error con su solicitud');
        }
      );
  }
}
