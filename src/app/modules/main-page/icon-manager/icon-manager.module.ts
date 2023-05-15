import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconManagerComponent } from './icon-manager/icon-manager.component';
import { IconManagerRoutingModule } from './icon-manager-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { CoreModule } from '../../../core/core.module';



@NgModule({
  declarations: [
    IconManagerComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    IconManagerRoutingModule
  ]
})
export class IconManagerModule { }
