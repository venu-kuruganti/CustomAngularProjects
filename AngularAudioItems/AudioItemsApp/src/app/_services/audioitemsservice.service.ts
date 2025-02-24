import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AudioItem } from '../_models/AudioItem';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AudioItemsService {

  baseUrl: string = environment.apiUrl;
  private http = inject(HttpClient);

  getAudioItems() {
    return this.http.get<AudioItem[]>(this.baseUrl + 'AudioItems');
  }

  getAudioItemDetailsById(id: number) {
    return this.http.get<AudioItem>(this.baseUrl + 'GetAudioItemDetailsById?id=' + id)
  }

  removeAudioItemById(id: number) {
    return this.http.post<number>(this.baseUrl + 'DeleteAudioItemById?id=' + id, null);
  }

  addNewAudioItem(item: AudioItem) {

    console.log("in addNewAudioItem");
    console.log("Model is : " + item);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    console.log("calling http.post");

    const newUrl = this.baseUrl + 'AddNewAudioItem';
console.log( "Api url : " + newUrl);

    return this.http.post<AudioItem>(newUrl, item, httpOptions)
      .pipe(catchError((error: any, caught: Observable<any>): Observable<any> => {
        console.error('There was an error!', error);

        // after handling error, return a new observable 
        // that doesn't emit any values and completes
        return of();
      }));
  }

  constructor() { }
}


