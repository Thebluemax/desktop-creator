import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstallPageComponent } from './install-page/install-page.component';

const routes: Routes = [
  { path: '', component: InstallPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstallAppRoutingModule { }
