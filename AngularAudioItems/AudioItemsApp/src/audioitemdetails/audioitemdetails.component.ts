import { Component, inject, Input, input, OnInit } from '@angular/core';
import { AudioItem } from '../app/_models/AudioItem';
import { AudioItemsService } from '../app/_services/audioitemsservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-audioitemdetails',
  standalone: true,
  imports: [],
  templateUrl: './audioitemdetails.component.html',
  styleUrl: './audioitemdetails.component.css'
})
export class AudioItemDetailsComponent implements OnInit {
  audioItemId: number;
  private audioItemsService = inject(AudioItemsService);
  private route = inject(ActivatedRoute);
  item: AudioItem;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.audioItemId = params['id']
    });

    console.log("Id is : " +  this.audioItemId);
    this.loadDetails(this.audioItemId);
  }

  loadDetails(id: number) {
    this.audioItemsService.getAudioItemDetailsById(id).subscribe({
      next: _item => this.item = _item
    });
  }





}
