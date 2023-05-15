import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent,
  children: [
    { path:'create', loadChildren:()=> import('./create-launcher/create-launcher.module').then(m => m.CreateLauncherModule)},
    { path:'icon', loadChildren:()=> import('./icon-manager/icon-manager.module').then(m => m.IconManagerModule)},
    { path:'configuration', loadChildren:()=> import('../configuration/configuration.module').then(m => m.ConfigurationModule)},
    { path:'install', loadChildren:()=> import('../install-app/install-app.module').then( m => m.InstallAppModule)},
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }
