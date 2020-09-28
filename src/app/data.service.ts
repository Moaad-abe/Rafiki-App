import { Injectable } from '@angular/core';
import { Guide } from './logic/Guide';
import { PlaceLocation } from './logic/placeLocation';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  getList(callback) {
        // TODO: Change it with a real Web Service
    const list = [
    new Guide('John', 'CH', new PlaceLocation('Green Via' , 'MAdrid')),
    new Guide('Clark', 'UK' , new PlaceLocation('Catalonia', 'Barca')),
    new Guide('Maya', 'TH' , new PlaceLocation('Istanbul', 'Turkey')),
    new Guide('Fadi', 'SA' , new PlaceLocation('Jerusalem', 'Israel')),
    new Guide('Moaad', 'NA' , new PlaceLocation('Athens', 'Greece')),
    new Guide('Johnathan', 'KO' , new PlaceLocation('Izmir', 'Turkey')),
    new Guide('Mark', 'BU' , new PlaceLocation('Cairo', 'Egypt')),
    new Guide('Yousef', 'CI' , new PlaceLocation('Moscow', 'Russia')),
    new Guide('Shereen', 'AT' , new PlaceLocation('Ibiza', 'USA')),
    new Guide('Nancy', 'WA' , new PlaceLocation('Calefornia', 'USA')),
    new Guide('Om Kolthom', 'CF' , new PlaceLocation('Corfu', 'Greece')),
    new Guide('Iyad', 'NA' , new PlaceLocation('Nazareth', 'Israel'))
    ];
    callback(list);
  }
  save(Guide , callback) {
    // TODO: Change it with a real Web Service
  callback(true);
  }
}
