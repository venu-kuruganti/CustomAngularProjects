import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HttpClient } from '@angular/common/http';
import { AudioItemDetailsComponent } from './audioitemdetails/audioitemdetails.component';
import { AddItemComponent } from './add-item/add-item.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'details/:id', component: AudioItemDetailsComponent },
    { path: 'additem', component: AddItemComponent },
    { path: 'additem/:id', component: AddItemComponent }
];

