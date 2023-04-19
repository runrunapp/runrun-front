import {
  ChangeDetectionStrategy,
  Component,
  ComponentFactoryResolver,
  Injector,
  Input,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  icon,
  LatLng,
  latLng,
  layerGroup,
  Map,
  marker,
  tileLayer,
} from 'leaflet';
import { PlanType } from '../../publish/models/publish.models';
import { Listing } from '../listing.models';
import { MapPopupComponent } from './map-popup/map-popup.component';

@Component({
  selector: 'app-map-search',
  templateUrl: './map-search.component.html',
  styleUrls: ['./map-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapSearchComponent implements OnInit {
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  // profileURL = URLs.profileURL;
  get markers() {
    return layerGroup(
      this.listings.map((listing) => {
        const factory =
          this.componentFactoryResolver.resolveComponentFactory(
            MapPopupComponent
          );
        const popup = factory.create(this.injector);
        popup.instance.title = listing.title;
        popup.instance.price = listing.price;
        popup.instance.isPlus = listing.planType == PlanType.RUNRUNPLUS;

        if (listing.images.length > 0) {
          popup.instance.image = listing.images[0].image;
        }

        popup.instance.id = listing.id;
        popup.instance.currency = listing.currency;
        popup.changeDetectorRef.detectChanges();
        const m = marker([listing.locationLat, listing.locationLng], {
          icon: icon({
            iconUrl: '/assets/svg/icons/pin-pink.svg',

            iconSize: [30, 30], // size of the icon
            shadowSize: [15, 15], // size of the shadow
            iconAnchor: [15, 0], // point of the icon which will correspond to marker's location
            shadowAnchor: [4, 20], // the same for the shadow
            popupAnchor: [60, 15], // point from which the popup should open relative to the iconAnchor)
          }),
        }).bindPopup(popup.location.nativeElement);
        m.setOpacity(0.8);
        m.on({
          // mouseover: (e) => {
          //   m.setOpacity(1.0);
          //   m.openPopup();
          // },
          // mouseout: (e) => {
          //   m.setOpacity(0.8);
          //   // m.closePopup();
          // },
          click: (e) => {
            m.openPopup();
          },
        });
        return m;
      })
    );
  }
  @Input() listings: Listing[] = [];
  @Input() center: LatLng = latLng(23.12, -82.38);

  map!: Map;

  streetMaps = tileLayer(
    'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
    {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19,
    }
  );

  options = {
    layers: [this.streetMaps],
    zoom: 16,
    center: this.center,
  };

  ngOnInit(): void {}

  centerOnQueryOrUser(map: Map): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      const lat = params.lat;
      const lon = params.lon;
      if (lat && lon) {
        this.center = latLng(lat, lon);
      } else {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            this.center = latLng(pos.coords.latitude, pos.coords.longitude);
          },
          (e) => {
            // TODO handle error response
          }
        );
      }
      map.flyTo(this.center);
    });
  }

  onMapReady(map: Map): void {
    this.map = map;
    this.centerOnQueryOrUser(map);
  }

  invalidateMap(): void {
    setTimeout(() => {
      this.map.invalidateSize();
    }, 0);
  }
}
