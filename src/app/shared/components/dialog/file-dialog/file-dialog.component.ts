import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog,  MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ElectronService } from '../../../../core/services';
import { ElectronFsService } from '../../../../core/services/electron/electron-fs.service';

@Component({
  selector: 'app-file-dialog',
  templateUrl: './file-dialog.component.html',
  styleUrls: ['./file-dialog.component.scss']
})
export class FileDialogComponent implements OnInit {

  fileList:string;
  pathArray:string[];
  basePath: string;
  actualPath: string;
  imagefolder: boolean;
  constructor(
    private dialogRef: MatDialogRef<FileDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private electronFile: ElectronFsService,
  ) {
      this.imagefolder = data.imageFolder;
   }

  ngOnInit(): void {
    if (this.imagefolder) {
      this.electronFile.readImgFolder()
      .then( (data:any) => {
        console.log(data);
        this.fileList = data.data;
        this.basePath = data.path;
        this.actualPath = this.basePath;
        this.doPath();
      });
    } else {
      this.electronFile.readAppFolder()
      .then( (data:any) => {
        console.log(data);
        this.fileList = data.data;
        this.basePath = data.path;
        this.actualPath = this.basePath;
        this.doPath();
      });

    }

  }
  getFolder(path) {
    this.electronFile.getFiles(path)
    .then( (data:any) => {
      this.fileList = data.data;
      this.basePath = data.path;
      this.actualPath = this.basePath;
      this.doPath();
    }).catch(err => {
      console.error(err);
    });
  }

  getItem(event){
    this.electronFile.getFile(event)
    .then( data => {
      console.log(data);
      this.dialogRef.close(data);
    })
  }

  doPath(){
    this.pathArray = this.actualPath.split('/').slice(3,this.actualPath.length);
  }
  close(){
    this.dialogRef.close();
  }

  changePath(event){
    console.log(event);
    this.actualPath = event;
    this.pathArray = [];
    this.doPath();
    this.getFolder(event);
  }

}
