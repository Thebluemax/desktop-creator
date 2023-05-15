import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FileBuilder } from '../../../../core/classes/file-builder';
import { ElectronFsService } from '../../../../core/services/electron/electron-fs.service';
import { FileDialogComponent } from '../../../../shared/components/dialog/file-dialog/file-dialog.component';
import { FileItem } from '../../../../shared/components/material-file-input/material-file-input.component';

export interface KeyPar {
  [key: string]: string;
}
@Component({
  selector: 'app-edit-tab',
  templateUrl: './edit-tab.component.html',
  styleUrls: ['./edit-tab.component.scss']
})
export class EditTabComponent implements OnInit {
  desktopEntryText: string = 'Nothing to show';
  form: FormGroup;
  finalList:KeyPar[];

  constructor(
    private electFile: ElectronFsService,
    private dialog: MatDialog
    ) {
    this.form = new FormGroup({});
  }

  ngOnInit(): void {
  }

  proccessFileSystem(item){
      this.desktopEntryText = item;
      this.finalList = this.proccessString();
      this.proccessForm();
  }

  proccessFile(event: FileItem[]) {
    const promise = FileBuilder.readEntry(event[0].file);
    promise.then(resp => {
      this.desktopEntryText = resp;
      this.finalList = this.proccessString();
      this.proccessForm();
    });
  }

  proccessString() {
    let lines: string[] = this.desktopEntryText.split('\n');
    let finalList: KeyPar[] = [];
    for (const line in lines) {
      if (Object.prototype.hasOwnProperty.call(lines, line)) {
        const element = lines[line];
        if (element.length > 0 && !element.includes('[Desktop ')) {
          let entryLine = element.split('=');
          entryLine[0] = entryLine[0].replace(/^\w/, (c) => c.toLowerCase())
          finalList[entryLine[0]] = entryLine[1];
        }
      }
    }
    return finalList;
  }

  proccessForm(){
    for (const key in this.finalList) {
      if (Object.prototype.hasOwnProperty.call(this.finalList, key)) {
        const element = this.finalList[key];
          this.form.addControl(key,new FormControl(element));
      }
    }
  }

  getDesktop(){
    const dialogRef = this.dialog.open(FileDialogComponent);

    dialogRef.afterClosed()
    .subscribe( data => {
      if(data){
        console.log(data);
        this.proccessFileSystem(data);
      }
    })
  }
}
