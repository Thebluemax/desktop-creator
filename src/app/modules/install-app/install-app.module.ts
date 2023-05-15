import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstallPageComponent } from './install-page/install-page.component';
import { InstallAppRoutingModule } from './install-app-routing.module';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    InstallPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    InstallAppRoutingModule
  ]
})
export class InstallAppModule { }
