import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from '../app-routing.module';
import { Routes } from '@angular/router';
import { ViewitemsComponent } from '../viewitems/viewitems.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewitemsComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

const routes: Routes = [

    { path: 'viewitems', component: ViewitemsComponent },
    { path: 'home', component: ViewitemsComponent },
    {path: '', redirectTo:'/home', component:ViewitemsComponent}

]; 

export class AppModule {}
