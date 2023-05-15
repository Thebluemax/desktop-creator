import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { KeyPar } from '../edit-tab/edit-tab.component';

@Component({
  selector: 'app-runtime-form',
  templateUrl: './runtime-form.component.html',
  styleUrls: ['./runtime-form.component.scss']
})
export class RuntimeFormComponent implements OnInit, OnChanges {

  @Input() entriesList:KeyPar[] = [];
  @Input() formGroup:FormGroup;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit(): void {
  }
  onSubmit(){}

}
