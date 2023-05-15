import { AfterContentInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import * as path from 'path/posix';
import { APP_CONFIG } from '../../../../environments/environment';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit,AfterContentInit, OnChanges {

  linkList: any[] = [];
  @Input() listButtons:string[];
  @Output() changePath: EventEmitter<string> = new EventEmitter()
  constructor() { }
  ngAfterContentInit(): void {

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.listButtons)
    if (!this.listButtons) {
      return;
    }
    this.linkList = [];
    let pathBase: string = APP_CONFIG.pathUser;
    this.listButtons.forEach(value =>{
      pathBase += value+'/';
      const link: any = {
        name: value,
        path: pathBase
      }
      this.linkList.push(link);
    })
  }

  ngOnInit(): void {

  }

  setPath(event,path){
    console.log(event,path);
    event.preventDefault();
    this.changePath.next(path);
  }

}
