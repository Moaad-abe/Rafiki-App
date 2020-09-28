import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  loading = false;
  action: 'login' | 'signup' = 'login';
  error: string;
  email: string;
  password: string;
  constructor(private afAuth: AngularFireAuth, private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  async onSubmit(form: NgForm) {
    this.loading = true;
    this.error = null;
    const {email , password , firstName , lastName} = form.value;
    let resp;
    try {
      if (this.isSignUp) {
         resp = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
         await resp.user.updateProfile({ displayName: `${firstName} ${lastName}`});
         await this.auth.createUserDocument();
         form.reset();
      } else {
        resp = await this.afAuth.auth.signInWithEmailAndPassword(email, password);

      }
      const uid = resp.user.uid;
      this.auth.routeOnLogin();
    } catch (error) {
      console.log(error.message);
      this.error = error.message;
    }
    this.loading = false;
  }
  get isLogin() {
    return this.action === 'login';
  }
  get isSignUp() {
    return this.action === 'signup';
  }
}
