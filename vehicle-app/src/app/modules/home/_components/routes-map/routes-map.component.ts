import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { } from 'googlemaps';
import { VehicleStateService } from '../../_services/vehicle-state.service';
import { Subject, takeUntil } from 'rxjs';
@Component({
  selector: 'app-routes-map',
  templateUrl: './routes-map.component.html',
  styleUrls: ['./routes-map.component.scss']
})
export class RoutesMapComponent implements OnInit, OnDestroy {
  @Input() source!: google.maps.LatLngLiteral
  mapLoaded!: boolean;
  map!: google.maps.Map;
  markers: google.maps.Marker[] = [];
  destination = {
    lat: 29.973435,
    lng: -90.000618
  };
  options: google.maps.MapOptions = {
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: true,
    disableDefaultUI: true,
    disableDoubleClickZoom: true,
    zoom: 12
  }
  ds!: google.maps.DirectionsService;
  // dr!: google.maps.DirectionsRenderer;
  dr = new google.maps.DirectionsRenderer({
    map: undefined,
    suppressMarkers: true
  });

  protected _onDestroy$ = new Subject<void>;

  constructor(private vehicleState: VehicleStateService) { }

  ngOnInit(): void {
    this.loadMap();
    this.subscribeToChanges();
  }

  loadMap() {
    // initialize the map container
    this.map = new google.maps.Map(document.getElementById('map-canvas')!, {
      ...this.options,
      center: this.source
    });

    var currentLocation = new google.maps.Marker({
      position: this.destination,
      icon: {
        url: './assets/images/destination_custom_pin.svg',
        anchor: new google.maps.Point(35, 10),
        scaledSize: new google.maps.Size(100, 100)
      },
      map: this.map
    });
    // this.markers.push(currentLocation);
  }

  subscribeToChanges() {
    this.vehicleState.locationChanged$
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(() => {
        this.updateRoute(null);
      });

  }

  updateRoute(map: google.maps.Map | null) {
    if (this.markers.length > 0) {
      for (let i = 0; i < this.markers.length; i++) {
        this.markers[i].setMap(map);
      }
    }
    this.ds = new google.maps.DirectionsService();
    this.map.get
    // adding a marker
    var markerStart = new google.maps.Marker({
      position: this.source,
      icon: {
        url: './assets/images/truck_pin.svg',
        anchor: new google.maps.Point(35, 10),
        scaledSize: new google.maps.Size(100, 100)
      },
      map: this.map
    });

    // var destinationMarker = new google.maps.Marker({
    //   position: this.destination,
    //   icon: {
    //     url: './assets/images/destination_custom_pin.svg',
    //     anchor: new google.maps.Point(35, 10),
    //     scaledSize: new google.maps.Size(100, 100)
    //   },
    //   map: this.map
    // });
    
    this.markers.push(markerStart);
    this.setRoutePolyline();
  }

  setRoutePolyline() {
    let request = {
      origin: this.source,
      destination: this.destination,
      travelMode: google.maps.TravelMode.DRIVING
    };

    this.ds.route(request, (response, status) => {
      this.dr.setOptions({
        suppressPolylines: false,
        map: this.map,
        polylineOptions: {
          strokeColor: '#7E289B',
          strokeWeight: 5
        }
      });

      if (status == google.maps.DirectionsStatus.OK) {
        this.dr.setDirections(response);
      }
    })
  }

  ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }
}
