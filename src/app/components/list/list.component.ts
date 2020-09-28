import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Guide } from '../../logic/Guide';
import { GeolocationService } from '../../geolocation.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list: [Guide];

  constructor(private data: DataService,
              private geolocation: GeolocationService) { }

  goMap(guide: Guide){
    const mapURL = this.geolocation.getMapLink(guide.location);
    location.href = mapURL;
  }
  share(guide: Guide){
    if ('share' in navigator){
      (navigator as any).share({
        title: guide.name,
        text: guide.notes,
        url: window.location.href
      }).then(() => console.log("Shared")).catch(() => console.log("error sharing"));
    }else{
      const shareURL = `watsapp://send?text=${encodeURIComponent(guide.notes)}`;
      location.href = shareURL;
    }
  }
  ngOnInit() {
    this.data.getList(list => {
      this.list = list;
    });
  }

}
