import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Guide } from '../../logic/Guide';
import { GeolocationService } from '../../geolocation.service';
import { GuideRating } from '../../logic/GuideRating';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent implements OnInit {
  guide: Guide;
  data: any;

  constructor(private route: ActivatedRoute , private geolocation: GeolocationService, private router: Router, data: DataService) { }
  routingSubscribtion: any;
  guideRatingChanged(checked: boolean) {
    if (checked) {
      this.guide.guideRating = new GuideRating();
    } else {
      this.guide.guideRating = null;
    }
  }

  cancel() {
    this.router.navigate(['/']);

  }
  save() {
    this.data.save(this.guide, result => {
      if (result) {
        this.router.navigate(['/']);
      }

    });

  }

  ngOnInit() {
    this.guide = new Guide();
    this.routingSubscribtion = this.route.params.subscribe(params => {
      console.log(params["id"]);
    });
    this.geolocation.requestLocation(location => {
      if (location) {
        this.guide.location.latitude = location.latitude;
        this.guide.location.longitude = location.longitude;
      }
    });
  }
  ngOnDestroy(){
    this.routingSubscribtion.unsubscribe();
  }

}
