import { Component } from '@angular/core';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-confirm-modal',
  standalone: true,
  imports: [],
  templateUrl: './confirm-modal.component.html',
  styleUrl: './confirm-modal.component.css'
})
export class ConfirmModalComponent {

  message: string = "Are you sure?";
  onConfirm: (() => void) | undefined;
  onCancel: (() => void) | undefined;

  constructor(public bsModalRef: BsModalRef) {}

  confirm() {
    if (this.onConfirm) this.onConfirm();
    this.bsModalRef.hide();
  }

  cancel() {
    if (this.onCancel) this.onCancel();
    this.bsModalRef.hide();
  }

}
