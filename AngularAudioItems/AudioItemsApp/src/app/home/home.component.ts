import { Component, inject, OnInit } from '@angular/core';
import { AudioItem } from '../_models/AudioItem';
import { AudioItemsService } from '../_services/audioitemsservice.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailsModalComponent } from '../details-modal/details-modal.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  bsModalRef!: BsModalRef;
  AudioItems: AudioItem[];
  audioItemsService = inject(AudioItemsService);

  ngOnInit(): void {
    setTimeout(() => this.loadAudioItems(), 500);
  }

  loadAudioItems() {
    this.audioItemsService.getAudioItems().subscribe({
      next: _audioitems => this.AudioItems = _audioitems
    });
  }

  openDetailsModal(id: number) {
    this.bsModalRef = this.modalService.show(DetailsModalComponent, {
      initialState: { Id: id }
    });
  }

  openConfirmModal(id: number) {
    this.bsModalRef = this.modalService.show(ConfirmModalComponent);
    this.bsModalRef.content.message = "Do you really want to delete this item?";
    this.bsModalRef.content.onConfirm = () => {
      console.log("User clicked Yes");
      this.deleteAudioItem(id);
    };
    this.bsModalRef.content.onCancel = () => {
      console.log("User clicked No");
    };
  }

  deleteAudioItem(id: number) {
    this.audioItemsService.removeAudioItemById(id).subscribe({
      next: response => setTimeout(() => this.loadAudioItems(), 500)
    });
  }

  constructor(private route: ActivatedRoute, private modalService: BsModalService) {

  }
}
