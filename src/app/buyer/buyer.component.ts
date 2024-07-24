import { Component } from '@angular/core';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent {

  WhatToShow:number=0;

  changeCat(a:number){
    this.WhatToShow=a;
  }
}