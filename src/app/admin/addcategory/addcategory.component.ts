import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { AdminComponent } from '../admin.component';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent {

  constructor(public Http:HttpClient, public app:AppComponent){}
  name!:string;
  addCat(){
    let url=this.app.baseUrl+"admin/addCat"+this.app.id;
    this.Http.post(url,this.name).subscribe((data)=>{
      if (data==null) {
        window.alert("somethiong went wrong")
      } else {
        this.name='';
        window.alert("done")
      }
    })
  }
  deleteCat(i:number){

  }

}
