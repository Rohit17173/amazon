import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public http:HttpClient,public app:AppComponent){}
  login(){
    this.app.whatTOShow=5;
  }
  register(){
    this.app.whatTOShow=4;
  }
}
