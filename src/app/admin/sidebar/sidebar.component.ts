import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { AdminComponent } from '../admin.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(public app:AppComponent,public admin:AdminComponent){}
  changeCat(n:number){
    this.admin.WhatToShow=n;
  }
  logout(){
    // whatTOShow=0;
  }

}
