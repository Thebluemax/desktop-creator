import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FileDialogComponent } from '../../../shared/components/dialog/file-dialog/file-dialog.component';

@Component({
  selector: 'app-install-page',
  templateUrl: './install-page.component.html',
  styleUrls: ['./install-page.component.scss']
})
export class InstallPageComponent implements OnInit {
  loading:boolean;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
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
    //  this.loading = true;
     // this.imageRaw = cont;
      //const base64 = `data:image/png;base64, ${cont}`;
      //this.loadImg(base64);
    })
  }

}
