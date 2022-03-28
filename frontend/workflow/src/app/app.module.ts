import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';

import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';

import { defineLordIconElement } from "lord-icon-element";
const routes: Routes = [
  { path: 'SignUp', component: SignUpComponent }
];  // <-- import RouterModule and define routes

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    FooterComponent,
    
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
