import {Component, NgModule, VERSION} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {MapModule, MapAPILoader, BingMapAPILoaderConfig, BingMapAPILoader, MarkerTypeId, IMapOptions, IBox, WindowRef, DocumentRef, MapServiceFactory, ILatLong, BingMapServiceFactory, ClusterPlacementMode, ClusterClickAction, IMarkerIconInfo } from 'angular-maps';
let PathData: Array<any> = null;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent{
  private _markerTypeId = MarkerTypeId;
  private _options: IMapOptions = {
    disableBirdseye: false,
    disableStreetside: false,
    navigationBarMode: 1, 
    zoom: 6
  };
  
  private _box: IBox = {
    maxLatitude: 32,
    maxLongitude: -92,
    minLatitude: 29,
    minLongitude: -98
  };
    
  private _ranges: Map<number, string> = new Map<number,string>([
        [10, 'rgba(20, 180, 20, 0.5)'],
        [20, 'rgba(255, 210, 40, 0.5)'],
        [Number.MAX_SAFE_INTEGER ,'rgba(255, 40, 40, 0.5)']
    ]);

  private _markers: Array<ILatLong> = new Array<ILatLong>();
  
  private _iconInfo: IMarkerIconInfo = {
    markerType: MarkerTypeId.FontMarker,
    fontName: 'FontAwesome',
    fontSize: 24,
    color: 'red',
    markerOffsetRatio: { x: 0.5, y: 1 },
    text: '\uF276'
  }
  
  constructor() {
    this._populate();  
  }
  
  private _click(index: number){
     console.log(`Marker ${index} says: hello world...`);
  }
  
  private _clear(){
    this._markers.splice(0);
    this._markers = new Array<ILatLong>();
  }
  
  private _populate(){
    this._markers.push({ latitude: 29.714994, longitude: -95.46244})
    for(let i:number=0; i<50; i++){
      this._markers.push({ latitude: 29.714994 + Math.random() - Math.random(), longitude: -95.46244 + Math.random() - Math.random()});
    }  
  }
}

