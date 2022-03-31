import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';

import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';

import { defineLordIconElement } from "lord-icon-element";
import { PwelcomeComponent } from './pwelcome/pwelcome.component';
import { LoginComponent } from './user/login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AjouterAdminComponent } from './superAdmin/ajouter-admin/ajouter-admin.component';
import { HomeComponent } from './home/home.component';
import { ListAdminComponent } from './superAdmin/list-admin/list-admin.component';

const routes: Routes = [
  { path:'', component: PwelcomeComponent },
  { path: 'SignUp', component: SignUpComponent },
  {path:"Login", component: LoginComponent},
  { path: 'Ajouter_Admin', component: AjouterAdminComponent },
  {path:'Home', component: HomeComponent},
  { path: 'liste_admin', component: ListAdminComponent },


];  // <-- import RouterModule and define routes

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    FooterComponent,
    PwelcomeComponent,
    LoginComponent,
    NavbarComponent,
    AjouterAdminComponent,
    HomeComponent,
    ListAdminComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    
   
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
