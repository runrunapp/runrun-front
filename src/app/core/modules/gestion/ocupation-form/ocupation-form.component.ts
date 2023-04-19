import { ToastrService } from 'ngx-toastr';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { URLs } from 'src/app/app.constants';
import { GestionService } from '../gestion.service';
import { UserReduced } from '../../authentication/authentication.models';

@Component({
  templateUrl: './ocupation-form.component.html',
  styleUrls: ['./ocupation-form.component.scss'],
})
export class OcupationFormComponent implements OnInit, OnDestroy {
  id!: number;
  _onDestroy = new Subject();
  availableUsers$!: Observable<UserReduced[]>;

  startDate = new Date();
  endDate = new Date();
  selectedUser: number | null = null;
  paymentDay: number = 1;

  urls = URLs;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastrService: ToastrService,
    private gestionService: GestionService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(takeUntil(this._onDestroy))
      .subscribe((params) => {
        const id = params.get('id');
        if (id) {
          this.id = Number.parseInt(id);
          this.availableUsers$ = this.gestionService.getAvailableUsers(id);
        }
      });
  }

  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  onSubmit() {
    this.gestionService
      .markAsBusy(
        this.id,
        this.startDate,
        this.endDate,
        this.selectedUser,
        this.paymentDay
      )
      .subscribe(
        (response) => {
          this.toastrService.info(
            'Inmueble marcado como ocupado satisfactoriamente'
          );
          this.router.navigate([URLs.managerURL, this.id]);
        },
        (error) => {}
      );
  }
}
