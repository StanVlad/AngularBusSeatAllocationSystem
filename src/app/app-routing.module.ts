import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RouteConfigComponent } from './route-config/route-config.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent},
  { path: 'sign-in', component: LoginComponent},
  { path: 'routes', component: RouteConfigComponent},
  { path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
