import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { PageNotFoundComponent } from './components/';
import { WebviewDirective } from './directives/';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialFileInputComponent } from './components/material-file-input/material-file-input.component';
import { DownloadButtonComponent } from './components/download-button/download-button.component';
import { CoreModule } from '../core/core.module';
import { FileItemComponent } from './components/file-item/file-item.component';
import { FileDialogComponent } from './components/dialog/file-dialog/file-dialog.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { ItemFileComponent } from './components/dialog/item-file/item-file.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { LoadingComponent } from './components/loading/loading.component';
import { FormAppComponent } from './components/form-app/form-app.component';


@NgModule({
  declarations: [
    PageNotFoundComponent,
    WebviewDirective,
    MaterialFileInputComponent,
    DownloadButtonComponent,
    FileItemComponent,
    FileDialogComponent,
    CanvasComponent,
    ItemFileComponent,
    BreadcrumbComponent,
    LoadingComponent,
    FormAppComponent
  ],
  imports: [
    CoreModule,
    CommonModule,
    TranslateModule,
    MatCardModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatDialogModule,
    MatListModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    TranslateModule,
    WebviewDirective,
    FormsModule,
    MatCardModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatDividerModule,
    MatDialogModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    FlexLayoutModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MaterialFileInputComponent,
    DownloadButtonComponent,
    CanvasComponent,
    ItemFileComponent,
    BreadcrumbComponent,
    LoadingComponent,
    FormAppComponent

  ]
})
export class SharedModule { }
