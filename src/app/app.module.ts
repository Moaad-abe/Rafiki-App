import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {GeolocationService} from './geolocation.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DataService} from './data.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HammerModule} from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { ListComponent } from './components/list/list.component';
import { GuideComponent } from './components/guide/guide.component';
import { Routes , RouterModule } from '@angular/router';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ServiceWorkerModule  } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './components/home/home.component';
import {AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { UsersComponent } from './components/users/users.component';
import { SearchComponent } from './components/search/search.component';
import { SubListComponent } from './components/sub-list/sub-list.component';


const routes: Routes = [
  // {path:'',component:HomeComponent},
  // {path:'list',component:ListComponent},
  // {path:'guide',component:GuideComponent},
  // {path:'guide/:id',component:GuideComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    GuideComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    UsersComponent,
    SearchComponent,
    SubListComponent
  ],
  imports: [
    RouterModule.forRoot(routes), MatAutocompleteModule,
    BrowserModule, FormsModule, MatSnackBarModule, MatSidenavModule,
    AppRoutingModule, BrowserAnimationsModule, MatMenuModule,
    MatButtonModule, MatIconModule , MatInputModule, MatStepperModule,
    MatSelectModule , MatSliderModule, MatToolbarModule,
    MatCardModule , MatSlideToggleModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }) ,
    AngularFireAuthModule , AngularFireDatabaseModule , AngularFireModule.initializeApp(environment.firebaseConfig), ReactiveFormsModule,
    // tslint:disable-next-line: max-line-length
    AngularFirestoreModule , AngularFireStorageModule , MatListModule , MatProgressSpinnerModule , MatDatepickerModule , HammerModule , MatNativeDateModule , MatMomentDateModule
  ],
  providers: [GeolocationService , DataService , AngularFireAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
