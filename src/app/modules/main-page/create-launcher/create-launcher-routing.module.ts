import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsTabsComponent } from './forms-tabs/forms-tabs.component';

const routes: Routes = [
  { path: '', component: FormsTabsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateLauncherRoutingModule { }
