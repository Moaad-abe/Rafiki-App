import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable , Subject} from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {}

  // tslint:disable-next-line: max-line-length
  typesOfRequierments: string[] = ['CulinaryFood', 'Café Lover', 'Meusums', 'Historical Places', 'Not Smoking', 'Mountain Climbing', 'Bicycles', 'Jeeps'];
  typesOfFeatures: string[] = ['Fitness', 'Driving License', 'Veteran', 'Highly Ranked', 'Best Reviews'];
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  therdFormGroup: FormGroup;
  fourFormGroup: FormGroup;
  fiveFormGroup: FormGroup;
  sixFormGroup: FormGroup;
  isEditable = false;
  num1: number;

showSpinner = false;
showRafiki = false;
getData() {
  this.showSpinner = true;
  setTimeout( () => {
this.showSpinner = false;
  },
3000 );
}
getLogo() {
  this.showRafiki = true;
  setTimeout( () => {
this.showRafiki = false;
  },
3000 );
}
 getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
  ngOnInit() {
    this.getLogo();
    this.num1 = this.getRandomInt(2, 10);
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.therdFormGroup = this.formBuilder.group({
      therdCtrl: ['', Validators.required]
    });
    this.fourFormGroup = this.formBuilder.group({
      fourCtrl: ['', Validators.required]
    });
    this.fiveFormGroup = this.formBuilder.group({
      fiveCtrl: ['', Validators.required]
    });
    this.sixFormGroup = this.formBuilder.group({
      sixCtrl: ['', Validators.required]
    });
  }
}
