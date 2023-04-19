import { Listing } from 'src/app/core/modules/search/listing.models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { ToastrService } from 'ngx-toastr';
import { URLs } from 'src/app/app.constants';
import { AppState, AuthenticationActions } from 'src/app/root-store';
import { environment } from 'src/environments/environment';
import { PropertyType } from '../models/publish.models';

@Injectable({
  providedIn: 'root',
})
export class PublishService {
  private publishAPIUrl = environment.apiUrl + 'publish/listing/';
  private publishImageAPIUrl = environment.apiUrl + 'publish/images/';

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private router: Router,
    private store: Store<AppState>
  ) {}

  getListing(listing: number) {
    return this.http.get(`${this.publishAPIUrl}${listing}/`);
  }

  patchListing(listing: number, data: any) {
    return this.http.patch(`${this.publishAPIUrl}${listing}/`, data);
  }

  deleteListing(listing: number) {
    return this.http.delete(`${this.publishAPIUrl}${listing}/`);
  }

  publish(data: any) {
    const propertyType = data.basic.propertyType;

    switch (propertyType) {
      case PropertyType.HOUSE:
        this.postHouse(data);
        break;
      case PropertyType.ROOM:
        this.postRoom(data);
        break;
      case PropertyType.OFFICE:
        this.postOffice(data);
        break;
      case PropertyType.GARAGE:
        this.postGarage(data);
        break;
      case PropertyType.LOCAL:
        this.postLocal(data);
        break;
    }
  }

  postHouse(data: any): void {
    const basicCommonData = this.checkForCommonFormVality(data);
    let _data = {
      ...basicCommonData,
      // House fields
      ...data.house,
      electrodomestic: null,
      ...data.house.electrodomestic,
      infrastructure: null,
      ...data.house.infrastructure,
    };
    _data = JSON.parse(JSON.stringify(_data));

    this.post(_data, data.basic.images);
  }

  postRoom(data: any): void {
    const basicCommonData = this.checkForCommonFormVality(data);
    let _data = {
      ...basicCommonData,
      // Room fields
      ...data.room,
      comodities: null,
      ...data.room.comodities,
    };
    _data = JSON.parse(JSON.stringify(_data));

    this.post(_data, data.basic.images);
  }

  postOffice(data: any): void {
    const basicCommonData = this.checkForCommonFormVality(data);
    let _data = {
      ...basicCommonData,
      // Office fields
      ...data.office,

      others: null,
      ...data.office.others,
    };
    _data = JSON.parse(JSON.stringify(_data));

    this.post(_data, data.basic.images);
  }

  postLocal(data: any): void {
    const basicCommonData = this.checkForCommonFormVality(data);
    let _data = {
      ...basicCommonData,
      // Local fields
      ...data.local,

      others: null,
      ...data.local.others,
    };
    _data = JSON.parse(JSON.stringify(_data));

    this.post(_data, data.basic.images);
  }

  postGarage(data: any): void {
    const basicCommonData = this.checkForCommonFormVality(data);
    let _data = {
      ...basicCommonData,
      // Garage fields
      ...data.garage,

      others: null,
      ...data.garage.others,
    };
    _data = JSON.parse(JSON.stringify(_data));

    this.post(_data, data.basic.images);
  }

  private checkForCommonFormVality(data: any) {
    const extractedData = {
      ...data.basic,
      location: `${data.basic.location.lat},${data.basic.location.lon}`,
      // Common fields
      ...data.common,
      images: null,
    };
    return extractedData;
  }

  private post(data: any, images: any) {
    this.http.post<Listing>(this.publishAPIUrl, data).subscribe({
      next: (response) => {
        this.router.navigateByUrl(URLs.publishFinishedURL);
        this.store.dispatch(AuthenticationActions.updateUser());
        images.forEach((image: any) => {
          this.publishImage(response.id, image);
        });
      },
      error: (error) => {
        this.toastr.error(error, 'Error al publicar');
      },
    });
  }

  addImage(listing: number, image: any) {
    return this.http.post(`${this.publishImageAPIUrl}`, {
      listing: listing,
      image: image,
    });
  }

  publishImage(listing: number, image: any) {
    this.addImage(listing, image.image).subscribe({
      next: (response) => {
        console.log('Success uploading image');
      },
      error: (error) => {
        this.toastr.error(error, 'Error al subir imagen');
      },
    });
  }

  updateImage(index: number, image: string) {
    return this.http.patch(`${this.publishImageAPIUrl}${index}/`, {
      image: image,
    });
  }

  removeImage(index: number) {
    return this.http.delete(`${this.publishImageAPIUrl}${index}/`);
  }
}
