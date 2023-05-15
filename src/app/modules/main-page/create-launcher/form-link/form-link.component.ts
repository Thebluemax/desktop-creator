import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConstLauncher } from '../../../../core/models/const-launcher';
import { DesktopEntry } from '../../../../core/models/desktop-entry';

@Component({
  selector: 'app-form-link',
  templateUrl: './form-link.component.html',
  styleUrls: ['./form-link.component.scss']
})
export class FormLinkComponent implements OnInit{
  encodingList: string[];
  optionForm: FormGroup;
  browsersList: {name:string,exec:string}[];
  addressForm

  hasUnitNumber = false;
  @Input() typeForm: string;
  @Output() desktopEntry: EventEmitter<DesktopEntry> = new EventEmitter();

  constructor(private fb: FormBuilder)
    {

    this.encodingList = ConstLauncher.ENCODING;
    this.browsersList = ConstLauncher.LINK_EXEC;
  }


  ngOnInit(): void {

  console.log(this.typeForm)
  this.optionForm = this.fb.group({
    name: [null, Validators.required],
    encoding: null,
    exec:[null,Validators.required],
    type: [this.typeForm, Validators.required],
    url: [null, Validators.required],
    icon: ['text-html', Validators.required],
  });


}

  onSubmit(): void {
    console.log(this.optionForm);
    if (this.optionForm.invalid) {
      return;
    }
    let entry: DesktopEntry = { ...this.optionForm.value };
    entry.exec = entry.exec + ' ' + entry.url;
    this.desktopEntry.emit(entry);
  }
}
