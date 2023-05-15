import { AfterViewInit, ChangeDetectorRef, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FileBuilder } from '../../../../core/classes/file-builder';
import { ImageManger } from '../../../../core/classes/image-manger';
import { ConstLauncher } from '../../../../core/models/const-launcher';
import { CanvasComponent } from '../../../../shared/components/canvas/canvas.component';
import { DownloadButtonComponent } from '../../../../shared/components/download-button/download-button.component';
import { FileItem } from '../../../../shared/components/material-file-input/material-file-input.component';
import { FileDialogComponent } from '../../../../shared/components/dialog/file-dialog/file-dialog.component';
import { ElectronFsService } from '../../../../core/services/electron/electron-fs.service';


@Component({
  selector: 'app-icon-manager',
  templateUrl: './icon-manager.component.html',
  styleUrls: ['./icon-manager.component.scss']
})

export class IconManagerComponent implements OnInit, AfterViewInit {
  form: FormGroup;
  imgManger: ImageManger;
  imageBase: string;
  imageRaw: string;
  realWidth: number;
  realHeight: number;
  iconsSize: number[];
  ready: boolean;
  loading: boolean;
  img: any;
  @ViewChild('imgElement', { static: false }) imgElement: HTMLImageElement;
  @ViewChildren(CanvasComponent) iconsList: QueryList<CanvasComponent>;
  @ViewChild(DownloadButtonComponent) downloadButton;

  constructor(
    private dialog: MatDialog,
    private domSanitize: DomSanitizer,
    private refChanges: ChangeDetectorRef,
    private fileService: ElectronFsService
  ) {
    this.iconsSize = ConstLauncher.ICONS_SIZE;
    this.form = new FormGroup({
      filename: new FormControl('hh', null),
      position: new FormControl('start', null)
    })

  }

  ngAfterViewInit(): void {
  //  this.imgElement.onload = () => {
  //    console.debug('load');
 //   }
  }

  ngOnInit(): void {


  }

  proccessFile(event: FileItem[]) {

    const promise = FileBuilder.createURL(event[0].file, '');
    promise.then(resp => {
      this.loadImg(resp);
    });
  }

  loadImg(imgData) {
    this.img = new Image();
    this.img.onload = () => {
      this.realWidth = this.img.naturalWidth;
      this.realHeight = this.img.naturalHeight;
      this.ready = true;
      this.loading = false;
      this.refChanges.detectChanges();
      this.iconsBuild(this.img, this.form.value.position);


    };
    this.imageBase = imgData;
    this.img.src = imgData;
  }
  updateValue(naturalWidth:number, naturalHeight: number){
    this.realWidth = naturalWidth;
      this.realHeight = this.img.naturalHeight;
      this.ready = true;
      this.loading = false;
      this.iconsBuild(this.img, this.form.value.position);
      this.refChanges.detectChanges();
  }

  iconsBuild(img, position) {
    let refX: number = 0;
    let refY: number = 0;
    let ref: number = 0;
    let maxLength = 0;
    if (img.naturalWidth < img.naturalHeight) {
      ref = this.realWidth;
      maxLength = this.realHeight;
    } else {
      ref = this.realHeight;
      maxLength = this.realWidth;
    }
    let pos = 0;
    switch (position) {
      case 'center':
        pos = (maxLength - ref) / 2
        break;
      case 'end':
        pos = maxLength - ref;
        break;
      default:
        break;
    }
    if (img.naturalWidth < img.naturalHeight) {
      refY = pos;
    } else {
      refX = pos;
    }

    this.iconsList.forEach(ic => {
      ic.setData(img, ref, refX, refY);
    })
    this.refChanges.detectChanges();
  }

  radioChange(event) {
    this.iconsBuild(this.img, event.value);
  }
  /**
   *
   */
  chooseFile() {
    const dialogRef = this.dialog.open(FileDialogComponent,{
      data:{
        imageFolder: true
      }
    });
    this.loading = true;
    dialogRef.afterClosed()
    .subscribe(cont => {
      if (!cont) {
        return;
      }
      this.loading = true;
      this.imageRaw = cont;
      const base64 = `data:image/png;base64, ${cont}`;
      this.loadImg(base64);
    })
  }

  saveToDisck(){
    this.fileService.witeFile('.','test.png',this.imageRaw)
    ;
  }

}
