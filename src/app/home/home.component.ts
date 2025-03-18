import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  mostSoldProducts = [
    {
      id: 1,
      name: 'Product 1',
      imageUrl: 'assets/1.jpg',
      price: 29.99,
      rating: 4.5,
      numReviews: 1200
    },
    {
      id: 2,
      name: 'Product 2',
      imageUrl: 'assets/3.jpg',
      price: 49.99,
      rating: 4.7,
      numReviews: 950
    },
    {
      id: 3,
      name: 'Product 3',
      imageUrl: 'assets/2.jpg',
      price: 19.99,
      rating: 4.2,
      numReviews: 800
    },
    {
      id: 4,
      name: 'Product 3',
      imageUrl: 'assets/4.webp',
      price: 19.99,
      rating: 4.2,
      numReviews: 800
    },
    {
      id: 5,
      name: 'Product 3',
      imageUrl: 'assets/2.jpg',
      price: 19.99,
      rating: 4.2,
      numReviews: 800
    },
    {
      id: 6,
      name: 'Product 3',
      imageUrl: 'assets/laptop.jpg',
      price: 19.99,
      rating: 4.2,
      numReviews: 800
    },
    {
      id: 7,
      name: 'Product 3',
      imageUrl: 'assets/office.jpg',
      price: 19.99,
      rating: 4.2,
      numReviews: 800
    }
  ];
  
    // constructor() { }
  
    
}
  
  


