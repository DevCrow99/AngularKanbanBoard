import { Component, ViewChild, ElementRef, Renderer, Input } from '@angular/core';

@Component({
  selector: 'upload-component',
  templateUrl: 'upload.component.html'
})

export class UploadComponent {
  @ViewChild('fileInput') inputEl: ElementRef;

  files: any[] = [];
  selectedFiles: string = "Keine ausgewählt.";

  constructor() {
  }

  onChange(files: any): void {
    this.selectedFiles = "";
    for (const file of files) {
     this.selectedFiles += `${file.name}, `;
    }
    this.selectedFiles = this.selectedFiles.substring(0, this.selectedFiles.length-2);

    this.files = files;
    console.log(files);
  }

}
