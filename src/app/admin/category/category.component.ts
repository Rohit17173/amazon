import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  list:any;

  constructor(public Http:HttpClient, public app:AppComponent){
    let url=app.baseUrl+"admin/getAll";

    Http.get(url).subscribe((data:any)=>{
      if (data==null) {
        window.alert("Something is Wrong")
      }else{
        this.list=data;
      }
    })
  }

  // name:string="";

  
  deleteCat(i:number){

  }

}
