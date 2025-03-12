import { Component, inject, Input, input, OnInit } from '@angular/core';
import { AudioItem } from '../_models/AudioItem';
import { AudioItemsService } from '../_services/audioitemsservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-audioitemdetails',
  standalone: true,
  imports: [],
  templateUrl: './audioitemdetails.component.html',
  styleUrl: './audioitemdetails.component.css'
})
export class AudioItemDetailsComponent implements OnInit {
  @Input({ required: true }) audioItemId!: number;
  private audioItemsService = inject(AudioItemsService);
  private route = inject(ActivatedRoute);
  item: AudioItem;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadDetails(this.audioItemId);
  }

  loadDetails(id: number) {
    this.audioItemsService.getAudioItemDetailsById(id).subscribe({
      next: _item => this.item = _item
    });
  }





}
