import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { icon, latLng, marker, tileLayer, Map, LeafletEvent } from 'leaflet';

@Component({
  selector: 'app-map-selection',
  templateUrl: './map-selection.component.html',
  styleUrls: ['./map-selection.component.css'],
})
export class MapSelectionComponent implements OnInit {
  @Output() mapMoveEvent = new EventEmitter<LeafletEvent>();

  streetMaps = tileLayer(
    'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
    {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19,
    }
  );

  select = marker([23.12, -82.38], {
    icon: icon({
      iconSize: [25, 41],
      iconAnchor: [13, 41],
      iconUrl: 'leaflet/marker-icon.png',
      iconRetinaUrl: 'leaflet/marker-icon-2x.png',
      shadowUrl: 'leaflet/marker-shadow.png',
    }),
  });

  options = {
    layers: [this.select],
    zoom: 13,
    center: latLng(23.12, -82.38),
  };

  constructor() {}

  ngOnInit(): void {}

  onMapMove(event: LeafletEvent): void {
    const newCenter = event.target.getCenter();
    this.select.setLatLng(newCenter);
  }
  onMapMoveEnd(event: LeafletEvent): void {
    this.mapMoveEvent.emit(event);
  }
}
