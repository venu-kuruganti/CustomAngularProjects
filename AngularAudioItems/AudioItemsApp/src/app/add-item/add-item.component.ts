import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AudioItemsService } from '../_services/audioitemsservice.service';
import { AudioItem } from '../_models/AudioItem';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent {

  private audioItemsService = inject(AudioItemsService);
  model:any = {};

  addNewItem(){
    console.log(this.model);
    this.audioItemsService.addNewAudioItem(this.model as AudioItem);
  }


}
