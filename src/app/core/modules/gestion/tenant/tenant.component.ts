import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TenantManager } from '../gestion.models';
import { GestionService } from '../gestion.service';

@Component({
  templateUrl: './tenant.component.html',
  styleUrls: ['./tenant.component.scss'],
})
export class TenantComponent implements OnInit {
  tenantManagers$!: Observable<TenantManager[]>;

  constructor(private gestionService: GestionService) {}

  ngOnInit(): void {
    this.tenantManagers$ = this.gestionService.getTenantManagers();
  }
}
