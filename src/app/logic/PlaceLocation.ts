export class PlaceLocation{
    address:string;
    city:string;
    latitude:number;
    longitude:number;
    constructor(address:string="" , city:string=""){
             this.address = address;
             this.city = city;
             this.latitude = null;
             this.longitude = null;
         }
}