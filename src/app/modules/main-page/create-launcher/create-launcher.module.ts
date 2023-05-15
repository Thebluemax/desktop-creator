import { NgModule } from '@angular/core';
import { FormsTabsComponent } from './forms-tabs/forms-tabs.component';
import { CreateLauncherRoutingModule } from './create-launcher-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { EditTabComponent } from './edit-tab/edit-tab.component';
import { RuntimeFormComponent } from './runtime-form/runtime-form.component';
import { FormLinkComponent } from './form-link/form-link.component';
import { CoreModule } from '../../../core/core.module';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    FormsTabsComponent,
    EditTabComponent,
    RuntimeFormComponent,
    FormLinkComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    CreateLauncherRoutingModule,
  ]
})
export class CreateLauncherModule { }
