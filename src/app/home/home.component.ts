import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElectronService } from '../core/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
    private electServ: ElectronService) { }

  ngOnInit(): void {
    console.log('HomeComponent INIT g');
    setTimeout( ()=>{
      console.log('launch');
      this.electServ.showDialog();
    },1000
    );
  }

}
