import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { AudioItem } from '../_models/AudioItem';

@Injectable({
  providedIn: 'root'
})
export class AudioItemsService {

  baseUrl: string = environment.apiUrl;
  private http = inject(HttpClient);

  getAudioItems() {
    return this.http.get<AudioItem[]>(this.baseUrl + 'AudioItems');
  }

  getAudioItemDetailsById(id:number){
    return this.http.get<AudioItem>(this.baseUrl + 'GetAudioItemDetailsById?id=' + id)
  }

  removeAudioItemById(id:number){
    return this.http.post(this.baseUrl + 'DeleteAudioItemById?id=' + id, null);
  }

  


  constructor() { }
}
