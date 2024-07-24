import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  WhatToShow:number=0;

  changeCat(){
    this.WhatToShow=1;
  }
}
