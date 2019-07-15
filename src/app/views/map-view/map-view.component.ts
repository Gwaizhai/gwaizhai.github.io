import { Component, OnInit } from '@angular/core';
import './../../../../node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.js'
import './../../../../node_modules/leaflet/dist/leaflet.js';
declare let L;
// var esri = require('esri-leaflet')

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
        const mymap = L.map('map').setView([51.505, -0.09], 13);
        const layers = null;
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoidmlyaW5jaGktdG9mIiwiYSI6ImNqd3M4enJvNzBsNHY0NHA1OWJjdTRxcTMifQ.ny1xfAtf3anIxgEeWnsGTg', {
            maxZoom: 18,
            minZoom: 4,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoidmlyaW5jaGktdG9mIiwiYSI6ImNqd3M4enJvNzBsNHY0NHA1OWJjdTRxcTMifQ.ny1xfAtf3anIxgEeWnsGTg'
        }).addTo(mymap);
        
        // var greenIcon = L.icon({
        //             iconUrl: 'public/assets/images/mappoint.png',
        //             iconSize:     [50,50], // size of the icon,
        //             iconAnchor:   [22, 94],
        //             popupAnchor:  [-3, -76]
        //   });

        // L.Routing.control({
        //     waypoints: [
        //         L.latLng(57.74, 11.94),
        //         L.latLng(57.6792, 11.949)
        //     ]
        // }).addTo(my);

          var searchControl = new L.esri.Controls.Geosearch().addTo(mymap);
          var results = new L.LayerGroup().addTo(mymap);

          searchControl.on('results', function(data){
            results.clearLayers();
            for (var i = data.results.length - 1; i >= 0; i--) {
              results.addLayer(L.marker(data.results[i].latlng));
            }
          });

        // var searchControl = new L.esri.Controls.Geosearch().addTo(mymap);
        // var results = new L.LayerGroup().addTo(mymap);
        // searchControl.on('results', function(data){
        //     layers.clearLayers();
        //     results.clearLayers();
        //     for (var fd = data.results.length - 1; fd >= 0; fd--) {
        //         if(data.results[fd].city){
        //             // window.locationSelected = "?city="+data.results[fd].city+"&country="+data.results[fd].country
        //             // var url = "http://192.168.1.114:3000/maps"+window.locationSelected
        //             //  $.ajax({
        //             //     url:url,
        //             //     type: 'GET',
        //             //     success: function (resp) {
        //             //         createBox(resp)
        //             //     },
        //             //     error: function(e){
        //             //         alert('Error: '+e);
        //             //     } 
        //             // });
        //         }else{
        //             // window.locationSelected = "?city="+data.results[fd].name+"&country="+data.results[fd].country
        //             // console.log(window.locationSelected);
        //             // console.log(data.results[fd]);
        //             // var url = "http://192.168.1.114:3000/maps"+window.locationSelected
        //             //  $.ajax({
        //             //     url:url,
        //             //     type: 'GET',
        //             //     success: function (resp) {
        //             //         createBox(resp)
        //             //     },
        //             //     error: function(e){
        //             //         alert('Error: '+e);
        //             //     } 
        //             // });  
        //         }
        //     }
        // });
        // var url = "http://192.168.1.114:3000/profiles"
        //     $.ajax({
        //     url:url,
        //     type: 'GET',
        //     success: function (resp) {
        //         createBox(resp)
        //     },
        //     error: function(e){
        //         alert('Error: '+e);
        //     } 
        // });

  }

}
