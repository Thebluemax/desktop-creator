import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

export interface FileItem {
  name:string;
  file: File;
}

@Component({
  selector: 'app-material-file-input',
  templateUrl: './material-file-input.component.html',
  styleUrls: ['./material-file-input.component.scss']
})

export class MaterialFileInputComponent implements OnInit {

  uploadFileName = 'Choose File';
  fileList:FileItem[] = [];

  @ViewChild('uploadControl',{static:false}) uploadControl: ElementRef;
  @Output() fileEvent: EventEmitter<FileItem[]> = new EventEmitter<FileItem[]>();

  constructor() { }

  ngOnInit(): void {
  }

  onFileChange(e: any) {
    this.fileList = [];
    if (e.target.files && e.target.files[0]) {

      this.uploadFileName = '';
      Array.from(e.target.files).forEach((file :any) => {
        this.uploadFileName += file.name + ',';
        const fileItem: FileItem = {
          file: file,
          name: file.name
        };
        this.fileList.push(fileItem);
      });
      this.uploadControl.nativeElement.value = "";
      this.fileEvent.emit(this.fileList);
    } else {
      this.uploadFileName = 'Choose File';
    }
  }
}
