import { PlaceLocation } from './placeLocation';
import { GuideRating } from './GuideRating';

export class Guide{
    name: String;
    place:String;
    location:PlaceLocation;
    rating:number;
    notes:string;
    guideRating:GuideRating;
    constructor(name:string="" , place:string ="" , location:PlaceLocation = null){
        this.name = name;
        this.place = place;
        this.location = new PlaceLocation();
        this.guideRating = new GuideRating();
        }
}