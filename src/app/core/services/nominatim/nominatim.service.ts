import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpParams } from '@angular/common/http';

import { NominatimConstant } from './nominatim.constant';
import { GeocodeConfig } from './geocode.config';
import { ReverseGeocodeConfig } from './reversegeocode.config';
import { GeocodeResponse } from './geocode.response';
import { ReverseGeocodeResponse } from './reversegeocode.response';
import { Observable } from 'rxjs';

@Injectable()
export class NominatimService {
  constructor(private http: HttpClient) {}

  getLocation(config: GeocodeConfig): Observable<GeocodeResponse[]> {
    const q = config.q || '';
    let addressdetails = config.addressdetails;
    if (addressdetails != 0 && addressdetails != 1) {
      addressdetails = 1;
    }
    let polygon_geojson = config.polygon_geojson;
    if (polygon_geojson != 0 && polygon_geojson != 1) {
      polygon_geojson = 1;
    }
    let params = new HttpParams();
    params = params.append('format', 'json');
    params = params.append('q', q);
    params = params.append('addressdetails', addressdetails.toString());
    params = params.append('polygon_geojson', polygon_geojson.toString());
    return this.http.get<GeocodeResponse[]>(
      NominatimConstant.GEOCODING_ENDPOINT,
      {
        params,
      }
    );
  }

  getAddress(config: ReverseGeocodeConfig): Observable<ReverseGeocodeResponse> {
    const lat = config.lat || '';
    const lon = config.lon || '';
    let addressdetails = config.addressdetails;
    if (addressdetails != 0 && addressdetails != 1) {
      addressdetails = 1;
    }
    let polygon_geojson = config.polygon_geojson;
    if (polygon_geojson != 0 && polygon_geojson != 1) {
      polygon_geojson = 1;
    }
    let lang = config['accept-language'];
    if (!lang) {
      lang = 'es';
    }
    let zoom = config.zoom;
    if (!zoom) {
      zoom = 8;
    }
    let params = new HttpParams();

    params = params.append('format', 'json');
    params = params.append('lat', lat.toString());
    params = params.append('lon', lon.toString());
    params = params.append('zoom', zoom.toString());
    params = params.append('addressdetails', addressdetails.toString());
    params = params.append('polygon_geojson', polygon_geojson.toString());
    params = params.append('accept-language', lang);

    return this.http.get<ReverseGeocodeResponse>(
      NominatimConstant.REVERSE_GEOCODING_ENDPOINT,
      {
        params,
      }
    );
  }
}
