import { Component, input, Input } from '@angular/core';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';
import { AudioItemDetailsComponent } from "../audioitemdetails/audioitemdetails.component";

@Component({
  selector: 'app-details-modal',
  standalone: true,
  imports: [AudioItemDetailsComponent],
  templateUrl: './details-modal.component.html',
  styleUrl: './details-modal.component.css'
})
export class DetailsModalComponent {

  @Input( {required: true}) Id!:number;

 constructor(public bsModalRef: BsModalRef) { }

 close(){
  this.bsModalRef.hide();
 }
}
