import { GestionService } from './../gestion.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './visit-requests.component.html',
  styleUrls: ['./visit-requests.component.scss'],
})
export class VisitRequestsComponent implements OnInit {
  visitRequests$!: Observable<any>;
  id!: string;

  constructor(
    private gestionService: GestionService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.id = id;
        this.visitRequests$ = this.gestionService.getVisitRequestsForListing(
          this.id
        );
      }
    });
  }

  onApprove(id: string) {
    this.gestionService.approveVisitRequest(id).subscribe((response) => {
      this.visitRequests$ = this.gestionService.getVisitRequestsForListing(
        this.id
      );
    });
  }
  onReject(id: string) {
    this.gestionService.rejectVisitRequest(id).subscribe((response) => {
      this.visitRequests$ = this.gestionService.getVisitRequestsForListing(
        this.id
      );
    });
  }
}
