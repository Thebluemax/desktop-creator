import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileBuilder } from '../../../core/classes/file-builder';
import { ConstLauncher } from '../../../core/models/const-launcher';
import { DesktopEntry } from '../../../core/models/desktop-entry';

@Component({
  selector: 'app-form-app',
  templateUrl: './form-app.component.html',
  styleUrls: ['./form-app.component.scss']
})
export class FormAppComponent {
  optionForm: FormGroup;


  hasUnitNumber = false;
versions:string[];
encodingList:string[];
  mainCategories: Array<any>;

  @Input() typeForm: string = '';
  @Output() desktopEntry: EventEmitter<DesktopEntry> = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.optionForm = this.fb.group({
      type:[this.typeForm,null],
      name: [null, Validators.required],
      genericName: [null, Validators.required],
      comment: [null, null],
      version: [null, null],
      icon: null,
      exec: [null, Validators.required],
      terminal: [null, null],
      tryExec: [null, null],
      categories: [null, null],
      keywords: [null, null],
      encoding: [null, null]
    });

    this.mainCategories = ConstLauncher.PRINCIPAL_CATEGORIES;
    this.versions = ConstLauncher.VERSION;
    this.encodingList = ConstLauncher.ENCODING;
  }

  fileChanged(event: any) {
    let file = event.target.files[0];
    FileBuilder.readEntry(file);
  }

  onSubmit(): void {
    if (this.optionForm.invalid) {
      return;
    }

    let entry: DesktopEntry = { ...this.optionForm.value };
    this.desktopEntry.emit(entry);
  }
}
