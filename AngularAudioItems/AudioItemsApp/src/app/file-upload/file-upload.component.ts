import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
  standalone: true
})
export class FileUploadComponent {
  @Output() fileSelected = new EventEmitter<Uint8Array | null>();

  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.readAsArrayBuffer(file);
      reader.onload = () => {
        const byteArray = new Uint8Array(reader.result as ArrayBuffer);
        this.fileSelected.emit(byteArray);
      };

      reader.onerror = (error) => {
        console.error('File reading error:', error);
        this.fileSelected.emit(null); // Emit null in case of error
      };
    }
  }
}
