import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { ElectronFsService } from './services/electron/electron-fs.service';

@NgModule({
  declarations: [
    SafeUrlPipe
  ],
  imports: [

  ],
  exports: [
    SafeUrlPipe
  ]
})
export class CoreModule { }
