import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ImageManger } from '../../../core/classes/image-manger';
import { ElectronFsService } from '../../../core/services/electron/electron-fs.service';
import { DownloadButtonComponent } from '../download-button/download-button.component';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit, AfterViewInit {
  url: string;
  @Input() canvasHeigth: number;
  @Input() canvasWidth: number;
  canvasManager: ImageManger;
  @ViewChild(DownloadButtonComponent) downloadButton;


  private context: CanvasRenderingContext2D;

  @ViewChild('canvasEl', { static: false }) canvasEl: ElementRef;
  constructor(
    private fsService: ElectronFsService
  ) {
  }

  ngAfterViewInit(): void {
    this.context = (this.canvasEl.nativeElement as HTMLCanvasElement).getContext('2d');
    this.canvasManager = new ImageManger(this.context);
  }

  ngOnInit(): void {
  }
  setData(data, width, px, py) {
    this.canvasManager.draw(data, this.canvasWidth, this.canvasHeigth, width, px, py);
    setTimeout(()=>{
      this.download();
    },100);
  }
  download(){
    this.url = (this.canvasEl.nativeElement as HTMLCanvasElement).toDataURL('image/png',1.0);
   this.downloadButton.setReady();
  }

  toDisk(){
    let base64Clear: string = this.url.split('base64,')[1];
    this.fsService.writeIcon('aplicatt.png',this.canvasWidth,base64Clear);
  }

}
