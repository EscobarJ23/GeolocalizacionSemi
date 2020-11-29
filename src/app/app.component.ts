import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultCenter = { lat: 55.5815245, lng: 36.8251383 };

  currentCenter = Object.assign({}, this.defaultCenter);
  zoom = 3;


  google: any;
  title = 'Geolocalizacion';


  enviarCoordenadas() {
    this.zoom = 16;

    if (navigator) {

      navigator.geolocation.getCurrentPosition(pos => {

        this.currentCenter = { lat: pos.coords.latitude, lng: pos.coords.longitude };
      })
    }
  }
}
