import { Component, inject, OnInit } from '@angular/core';
import { AudioItem } from '../_models/AudioItem';
import { AudioItemsService } from '../_services/audioitemsservice.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  AudioItems: AudioItem[];
  audioItemsService = inject(AudioItemsService);

  ngOnInit(): void {
    this.loadAudioItems();
  }

  loadAudioItems() {
    this.audioItemsService.getAudioItems().subscribe({
      next: _audioitems => this.AudioItems = _audioitems
    });
  }
}
