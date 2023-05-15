import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationComponent } from './configuration/configuration.component';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';
import { ConfigurationRoutingModule } from './configuration-routing.module';



@NgModule({
  declarations: [
    ConfigurationComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    ConfigurationRoutingModule
  ]
})
export class ConfigurationModule { }
