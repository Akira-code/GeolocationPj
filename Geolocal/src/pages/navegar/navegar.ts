import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GESTURE_PRIORITY_TOGGLE } from 'ionic-angular/umd/gestures/gesture-controller';

declare var google: any;

@Component({
  selector: 'page-navegar',
  templateUrl: 'navegar.html'
})
export class NavegarPage {

  @ViewChild ('map') mapRef: ElementRef;


  constructor(public navCtrl: NavController) {  }

  ionViewDidLoad(){
      this.showMap();
  }
  showMap(){
    const location = new google.maps.LatLng(51.507351, -0.127758);
  
    const options = {
    center: location,
    zoom: 15,
    streetViewControl: false,
    mapTypeId: 'roadmap'
    }

    const map= new google.maps.Map(this.mapRef.nativeElement, options);
    this.addMarker(location, map);
  }

    addMarker(position, map){
      return new google.maps.Marker({
        position,
        map
      });
    }
  }

