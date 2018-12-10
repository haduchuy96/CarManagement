import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/index';
import { LoginComponent } from './pages/login/index';
import { RegisterComponent } from './pages/register/index';
import { AuthGuard } from './_guards/index';


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
