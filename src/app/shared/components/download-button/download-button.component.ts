import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-download-button',
  templateUrl: './download-button.component.html',
  styleUrls: ['./download-button.component.scss']
})
export class DownloadButtonComponent implements OnInit {

  canDownload: boolean;
  isLoading: boolean;
  filename: string;

  @Input() url:string;
  @Input() inline:boolean;
  @ViewChild('linkA') link;
  constructor() { }

  ngOnInit(): void {
  }

  download(){
    console.log(this.link);
    this.link.nativeElement.click();
  }

  setLoading(){
    this.isLoading = true;
  }
  setReady(){
    this.isLoading = false;
    this.canDownload = true;
  }
  setDisable(){
    this.isLoading = false;
    this.canDownload = false;
  }
}
