import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationModule } from './configuration.module';
import { ConfigurationComponent } from './configuration/configuration.component';

const routes: Routes = [
  { path: '', component: ConfigurationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
