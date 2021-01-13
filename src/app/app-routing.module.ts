import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { logWarnings } from 'protractor/built/driverProviders';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'loginsuccess', component:LoginsuccessComponent},
  {path:'registration', component:RegistrationComponent},
  {path: 'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
