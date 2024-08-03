import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-sellerdetails',
  templateUrl: './sellerdetails.component.html',
  styleUrls: ['./sellerdetails.component.css']
})
export class SellerdetailsComponent {
  list:any;

  constructor(public Http:HttpClient, public app:AppComponent){
    let url=app.baseUrl+"admin/getSeller";

    Http.get(url).subscribe((data:any)=>{
      if (data==null) {
        window.alert("Something is Wrong")
      }else{
        this.list=data;
      }
    })
  }

  deleteCat(a:any){
    
  }

}
