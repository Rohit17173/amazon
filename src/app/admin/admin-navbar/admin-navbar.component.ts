import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { AdminComponent } from '../admin.component';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent {
  constructor(public app:AppComponent,public admin:AdminComponent){}
  changeCat(n:number){
    this.admin.WhatToShow=n;
  }
  logout(){
    // whatTOShow=0;
  }
}