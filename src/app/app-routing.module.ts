import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { GuideComponent } from './components/guide/guide.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AngularFireAuthGuard , redirectUnauthorizedTo, customClaims} from '@angular/fire/auth-guard';
import { map } from 'rxjs/operators';
import { UsersComponent } from './components/users/users.component';
import { pipe } from 'rxjs';
import { SubListComponent } from './components/sub-list/sub-list.component';

const redirectUnauthorizedToLogIn = () => redirectUnauthorizedTo(['']);
const redirectLogedInProfile = () =>
map(user => user ? ['profile', (user as any).uid] : true);
const redirectLogedInHomePage = () =>
map(user => user ? ['home', (user as any).uid] : true);

const adminOnly = () => pipe(
  customClaims,
  map(claims => claims.admin === true || [''])
);

const redirectLogedInToProfileOrUsers = () =>
  pipe(
    customClaims,
    map(claims => {
      // if no claims, then there is no authenticated users
      // so allow the route ['']
      if (claims.length === 0) {
        return true;
      }
      // if custom claim set, then redirct to ['users']
      if (claims.admin) {
        return ['users'];
      }
      // otherwise, redirct user's profile page
      return ['profile' , claims.user_id];
    })
  );

const allowOnlySelfOrAdmin = (next) => {
    pipe(
      customClaims ,
      map(claims => {
        if (claims.length === 0) {
        return [''];
        }
        return next.params.id === claims.user_id || claims.admin;
      })
    );
  };

const routes: Routes = [
  {
    path: '', component: LoginComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLogedInHomePage}
  },
  {
    path: 'home/:id', component: HomeComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogIn}
  },
  {
    path: 'profile', component: LoginComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLogedInToProfileOrUsers}
  },
  {
    path: 'profile/:id', component: ProfileComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogIn}
  },
  // {path:'',component:HomeComponent},
   {
     path: 'list',  component: ListComponent,
     canActivate: [AngularFireAuthGuard],
     data: { authGuardPipe: redirectUnauthorizedToLogIn}
    },
  // {path:'guide',component:GuideComponent},
   {
     path: 'guide', component: GuideComponent,
     canActivate: [AngularFireAuthGuard],
     data: { authGuardPipe: redirectUnauthorizedToLogIn}
    },
    {
      path: 'users' , component: UsersComponent,
      canActivate: [AngularFireAuthGuard],
      data: { authGuardPipe: adminOnly}
    },
    {
      path: 'sub-list',  component: SubListComponent,
      canActivate: [AngularFireAuthGuard],
      data: { authGuardPipe: redirectUnauthorizedToLogIn}
     }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
