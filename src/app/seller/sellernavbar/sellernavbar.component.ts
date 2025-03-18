import { Component } from '@angular/core';
import { SellerComponent } from '../seller.component';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-sellernavbar',
  templateUrl: './sellernavbar.component.html',
  styleUrls: ['./sellernavbar.component.css']
})
export class SellernavbarComponent {

  constructor(public app:AppComponent,public admin:SellerComponent){}
  changeCat(n:number){
    this.admin.WhatToShow=n;
  }
  changedisplay(){

  }

}
