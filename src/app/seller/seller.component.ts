import { Component } from '@angular/core';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent {
  WhatToShow:number=0;

  changeCat(){
    this.WhatToShow=1;
  }

}
