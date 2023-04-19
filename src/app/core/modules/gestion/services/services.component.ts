import { ToastrService } from 'ngx-toastr';
import { Observable, Subject } from 'rxjs';
import { GestionService } from './../gestion.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Service } from '../gestion.models';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit, OnDestroy {
  services$!: Observable<Service[]>;
  listing!: string;
  _onDestroy = new Subject();
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
          this.listing = id;
        }
      });
    this.services$ = this.gestionService.getServices();
  }

  selectedService: Service | null = null;
  message: string = '';

  onSubmit() {
    if (!this.selectedService) {
      this.toastrService.warning('Por favor seleccione un servicio');
      return;
    }

    this.gestionService
      .createServiceRequest(this.listing, this.selectedService.id, this.message)
      .subscribe(
        (response) => {
          this.toastrService.success('Solicitud enviada correctamente');
          this.message = '';
          this.selectedService = null;
        },
        (error) => {
          this.toastrService.error('Ocurrio un error con su solicitud');
        }
      );
  }

  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
}
