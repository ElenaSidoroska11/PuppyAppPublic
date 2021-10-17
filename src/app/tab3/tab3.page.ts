import {Component, ViewChild, ElementRef, OnInit, AfterContentInit} from '@angular/core';



declare var google;

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements  OnInit, AfterContentInit{
  map;
  @ViewChild('mapElement', {static:true}) mapElement;
  constructor() {}

  ngOnInit(): void {

  }

  ngAfterContentInit(): void {
    this.map = new google.maps.Map(
        this.mapElement.nativeElement,
        {
          center: {lat: 41.122107, lng: 20.800860},
          zoom: 12
        }
    );
    new google.maps.Marker({
      map: this.map,
      position: {lat: 41.13211, lng: 20.81861},
      icon: {
        url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
      }
    });
  }

  addMarkersToMap() {
    const position = new google.maps.LatLng(41.122107,20.800860);
    const museumMarker = new google.maps.Marker({ position });
    museumMarker.setMap(this.map);
  }
  }

