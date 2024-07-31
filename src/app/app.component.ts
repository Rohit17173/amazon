import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Amazon';
  
  // http://13.234.48.47:8080/
  baseUrl="http://localhost:8080/"
  id:number=0;
  whatTOShow:number=0;
}
