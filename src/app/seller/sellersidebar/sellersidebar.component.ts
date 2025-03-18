import { Component } from '@angular/core';
import { SellerComponent } from '../seller.component';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-sellersidebar',
  templateUrl: './sellersidebar.component.html',
  styleUrls: ['./sellersidebar.component.css']
})
export class SellersidebarComponent {

  constructor(public app:AppComponent,public seller:SellerComponent){}
  changeCat(n:number){
    this.seller.WhatToShow=n;
  }
  

}
