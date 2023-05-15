import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ElectronFsService } from '../../../../core/services/electron/electron-fs.service';

@Component({
  selector: 'app-item-file',
  templateUrl: './item-file.component.html',
  styleUrls: ['./item-file.component.scss']
})
export class ItemFileComponent implements OnInit {

  isFile: boolean;
  @Input() filename:string;
  @Input() base:string;
  @Output() chooseFile: EventEmitter<string>= new EventEmitter<string>();
  @Output() chooseFolder: EventEmitter<string>= new EventEmitter<string>();

  constructor(
    private eleFsService: ElectronFsService
  ) { }

  get filePath(): string {
    if (!this.base.match(/\/$/)) {
        this.base += '/';
    }
    return `${this.base}${this.filename}`;
    }

  ngOnInit(): void {
    this.isFile = this.eleFsService.isFile(this.filePath);
  }

  choose(){
    if (this.isFile) {

      this.chooseFile.emit(this.filePath);
    } else {
      this.chooseFolder.emit(this.filePath);

    }
  }
}
