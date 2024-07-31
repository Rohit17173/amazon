import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(public http:HttpClient,public app:AppComponent){}
  name!:string;
  // email!:string;
  username!:string;
  password!:string;
  accounttype!:number;

  register(){
    let url=this.app.baseUrl+"login/register"
    let user={
      accountType:this.accounttype,
      name:this.name,
      username:this.username,
      password:this.password
    }
    console.log(url)
    this.http.post(url,user).subscribe((data:any)=>{
      console.log(data)
      if (data==null) {
        window.alert('Something is wrong');
      }
       if(data==1){
        window.alert("enter username");
      }
      if(data==2){
         window.alert("Enter password");
      }
       if(data==4){
        window.alert("successfully registerd")
      }
       if(data==3){
        window.alert("username already exist try new one")
      }
    })
  }
  
}
