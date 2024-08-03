import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-buyerdetails',
  templateUrl: './buyerdetails.component.html',
  styleUrls: ['./buyerdetails.component.css']
})
export class BuyerdetailsComponent {

  list:any;

  constructor(public Http:HttpClient, public app:AppComponent){
    let url=app.baseUrl+"admin/getBuyer";

    Http.get(url).subscribe((data:any)=>{
      if (data==null) {
        window.alert("Something is Wrong")
      }else{
        console.log(data)
        this.list=data;
      }
    })
  }

  deleteCat(a:any){
    
  }

}
