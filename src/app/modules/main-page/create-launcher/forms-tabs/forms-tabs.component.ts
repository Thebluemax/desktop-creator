import { Component, OnInit, ViewChild } from '@angular/core';
import { EntryProccessor } from '../../../../core/classes/entry-proccessor';
import { ConstLauncher } from '../../../../core/models/const-launcher';
import { DesktopEntry } from '../../../../core/models/desktop-entry';
import { FileBuilder } from '../../../../core/classes/file-builder';
import { DownloadButtonComponent } from '../../../../shared/components/download-button/download-button.component';
import { ElectronService } from '../../../../core/services';

@Component({
  selector: 'app-forms-tabs',
  templateUrl: './forms-tabs.component.html',
  styleUrls: ['./forms-tabs.component.scss']
})
export class FormsTabsComponent implements OnInit {

  types: string[] = ConstLauncher.TYPES;
  url: string = '';
  @ViewChild(DownloadButtonComponent) downloadButton;
  constructor(private electServ: ElectronService) {
  }

  ngOnInit(): void {
    setTimeout( ()=>{
      console.log('launch');
      this.electServ.doFiles();
    },1000
    );
  }

  proccessEntry(event: DesktopEntry) {
    this.downloadButton.setLoading();
    let entryMachine = new EntryProccessor(event);
    let fileString = entryMachine.buildLauncher();
    let file: Blob = FileBuilder.buildFile(fileString, 'text/plain', 'test.desktop');
    console.log(FileBuilder.createURL(file, 'text/plain'));
    const promise = FileBuilder.createURL(file, 'text/plain');
    promise.then(resp => {
      this.url = resp;
      this.downloadButton.setReady();
    })
  }


  changeTab(event) {
    console.log(event);
    this.url = '';
    this.downloadButton.setDisable();
  }
}
