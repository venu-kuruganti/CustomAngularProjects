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
    return this.http.get<AudioItem[]>(`${this.baseUrl}AudioItems`);
  }

  getAudioItemDetailsById(id: number) {
    return this.http.get<AudioItem>(`${this.baseUrl}GetAudioItemDetailsById/${id}`);
  }

  removeAudioItemById(id: number) {    
    return this.http.post<number>(`${this.baseUrl}DeleteAudioItemById/${id}`, null);
  }

  addNewAudioItem(item: AudioItem) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    this.http.post<AudioItem>(`${this.baseUrl}AddNewAudioItem`, item, httpOptions)
      .subscribe({
        next: response => { return true; },
        error: err => console.error(err)
      });
  }

  updateAudioItem(item: AudioItem, id:number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    this.http.put<AudioItem>(`${this.baseUrl}UpdateAudioItem/${id}`, item, httpOptions)
      .subscribe({
        next: response => { return true; },
        error: err => console.error(err)
      });
  }

  constructor() { }
}


