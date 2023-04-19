import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Cite } from '../../models/cite.models';
import { UserReduced } from '../authentication/authentication.models';
import {
  Incidence,
  ListingDocument,
  ListingManager,
  Receipt,
  Service,
  TenantManager,
} from './gestion.models';

@Injectable({
  providedIn: 'root',
})
export class GestionService {
  constructor(private http: HttpClient) {}

  getListingManagers() {
    return this.http
      .get<{ results: ListingManager[] }>(
        `${environment.apiUrl}publish/manager/`
      )
      .pipe(map((response) => response.results));
  }

  getListingManager(id: string) {
    return this.http.get<ListingManager>(
      `${environment.apiUrl}publish/manager/${id}/`
    );
  }

  getDocumentsForListing(type: string | null, listing: string | null) {
    let url = `${environment.apiUrl}publish/documents?`;
    if (type) {
      url += `type=${type}`;
    }
    if (listing) {
      url += `&listing=${listing}`;
    }
    return this.http.get<ListingDocument[]>(url);
  }
  getListingContracts(id: string) {
    return this.getDocumentsForListing('contract', id);
  }

  getListingLegals(id: string) {
    return this.getDocumentsForListing('legal', id);
  }

  getListingInfoReceipts(id: string) {
    return this.getDocumentsForListing('receipt', id);
  }

  uploadDocument(
    title: string,
    type: 'contract' | 'receipt' | 'legal',
    document: any,
    listing: string,
    isPublic: boolean
  ) {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('type', type);
    formData.append('document', document, document.name);
    formData.append('listing', listing);
    formData.append('public', JSON.stringify(isPublic));

    return this.http.post(
      `${environment.apiUrl}publish/documents/create/`,
      formData
    );
  }

  createReceipt(
    listing: string,
    title: string,
    amount: number,
    currency: string,
    file: any,
    share: boolean
  ) {
    const formData = new FormData();
    formData.append('listingManager', listing);
    formData.append('description', title);
    formData.append('amount', amount.toString());
    formData.append('currency', currency);
    formData.append('file', file, file.name);
    formData.append('share', share.toString());

    return this.http.post(`${environment.apiUrl}publish/receipts/`, formData);
  }

  getListingReceipts(listing: string) {
    return this.http.get<Receipt[]>(
      `${environment.apiUrl}publish/receipts?listing_manager=${listing}`
    );
  }

  getTenantManagers() {
    return this.http.get<TenantManager[]>(
      `${environment.apiUrl}publish/tenants/`
    );
  }
  getTenantManager(id: string) {
    return this.http.get<TenantManager>(
      `${environment.apiUrl}publish/tenants/${id}/`
    );
  }

  getVisitRequestsForListing(id: string) {
    return this.http
      .get<Cite[]>(
        `${environment.apiUrl}publish/publications/${id}/visit_requests/`
      )
      .pipe(
        map((cites) =>
          cites.map((cite) => ({
            ...cite,
            creationDate: new Date(cite.creationDate),
          }))
        )
      );
  }

  approveVisitRequest(id: string) {
    return this.http.post(
      `${environment.apiUrl}publish/cites/${id}/approve/`,
      {}
    );
  }

  rejectVisitRequest(id: string) {
    return this.http.delete(`${environment.apiUrl}publish/cites/${id}/reject/`);
  }

  getReceipt(id: number) {
    return this.http
      .get<ListingManager>(`${environment.apiUrl}publish/manager/${id}/`)
      .pipe(map((response) => response.receipts));
  }

  getAvailableUsers(listing: string) {
    return this.http.get<UserReduced[]>(
      `${environment.apiUrl}publish/manager/${listing}/get_available_users/`
    );
  }

  createIncidence(listing: string, description: string) {
    return this.http.post(`${environment.apiUrl}publish/incidences/`, {
      listing: listing,
      description: description,
    });
  }

  getIncidences(listing: string) {
    return this.http.get<Incidence[]>(
      `${environment.apiUrl}publish/incidences/?listing=${listing}`
    );
  }

  solveIncidence(id: number) {
    return this.http.post(
      `${environment.apiUrl}publish/incidences/${id}/solve/`,
      {}
    );
  }

  markAsBusy(
    listing: number,
    startDate: Date,
    endDate: Date,
    user: number | null,
    paymentDay: number
  ) {
    return this.http.post(
      `${environment.apiUrl}publish/manager/${listing}/mark_as_busy/`,
      {
        busyStart: startDate,
        busyEnd: endDate,
        user: user,
        paymentDay: paymentDay,
      }
    );
  }
  markAsFree(listing: number) {
    return this.http.post(
      `${environment.apiUrl}publish/manager/${listing}/mark_as_free/`,
      {}
    );
  }
  markAsNotAvailable(listing: number) {
    return this.http.post(
      `${environment.apiUrl}publish/manager/${listing}/mark_as_not_available/`,
      {}
    );
  }

  setListingName(listing: number, name: string) {
    return this.http.patch(`${environment.apiUrl}publish/manager/${listing}/`, {
      listingName: name,
    });
  }

  getServices() {
    return this.http.get<Service[]>(`${environment.apiUrl}publish/services/`);
  }

  createServiceRequest(listing: string, service: number, message: string) {
    return this.http.post(`${environment.apiUrl}publish/services/request/`, {
      listing: listing,
      service: service,
      message: message,
    });
  }

  upgradePlan(listing: string) {
    return this.http.post(
      `${environment.apiUrl}publish/manager/${listing}/upgrade_plan/`,
      {}
    );
  }

  removeDocument(document: ListingDocument) {
    return this.http.delete(
      `${environment.apiUrl}publish/documents/${document.id}/`
    );
  }
}
