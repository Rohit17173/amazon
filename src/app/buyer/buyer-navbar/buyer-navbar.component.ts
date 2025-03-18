import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { BuyerComponent } from '../buyer.component';

@Component({
  selector: 'app-buyer-navbar',
  templateUrl: './buyer-navbar.component.html',
  styleUrls: ['./buyer-navbar.component.css']
})
export class BuyerNavbarComponent {

  constructor(public app:AppComponent,public buyer:BuyerComponent){}
  // WhatToShow:number=0;

  changeCat(a:number){
    this.buyer.WhatToShow=a;
  }
  logout(){
    this.app.whatTOShow=0;
  }
}
