import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IconManagerComponent } from './icon-manager/icon-manager.component';

const routes: Routes = [
  { path: '', component: IconManagerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IconManagerRoutingModule { }
