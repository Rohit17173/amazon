import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  list: any; // category list
  list2: any; // product list

  selectedFile: File | null = null;

  constructor(public Http: HttpClient, public app: AppComponent) {
    // Fetch categories
    let url = app.baseUrl + "admin/getAll";
    Http.get(url).subscribe((data: any) => {
      if (data == null) {
        window.alert("Something is Wrong")
      } else {
        this.list = data;
        console.log(this.list);
      }
    });

    // Fetch products
    let url2 = app.baseUrl + 'seller/getAllProd/' + app.id;
    Http.get(url2).subscribe((data: any) => {
      if (data == null) {
        window.alert("Something is Wrong")
      } else {
        this.list2 = data;
      }
    });
  }

  name: string = '';
  price: number = 0;
  quantity: number = 0;
  description: string = '';
  discount: number = 0;
  categoryid: number = 0;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  addProd() {
    if (this.selectedFile) {
      // Generate a unique name for the file
      const uniqueName = `${Date.now()}-${this.selectedFile.name}`;
      const reader = new FileReader();

      reader.onload = () => {
        const filePath = `assets/products/${uniqueName}`;
        // Save image and call the saveProduct method
        this.saveImage(filePath, reader.result as string);
        this.saveProduct(uniqueName);
      };

      reader.readAsDataURL(this.selectedFile);
    } else {
      // Save product without an image
      this.saveProduct();
    }
  }

  saveImage(filePath: string, imageData: string) {
    // Here we simulate saving the image in the frontend.
    // In a real-world application, you would send this image to the server.
    console.log(`Saving image to: ${filePath}`);
    // Implement your server-side logic to save the image.
  }

  saveProduct(imageName?: string) {
    let product = {
      "name": this.name,
      "userid": this.app.id,
      "price": this.price,
      "quantity": this.quantity,
      "description": this.description,
      "discount": this.discount,
      "categoryid": this.categoryid,
      "image": imageName // Store the image name if it exists
    };

    let url3 = this.app.baseUrl + 'seller/AddProd';
    this.Http.post(url3, product).subscribe((data: any) => {
      if (data == null) {
        window.alert("Something is Wrong")
      } else {
        this.list2.push(data);
        this.resetForm();
      }
    });
  }

  resetForm() {
    this.name = '';
    this.price = 0;
    this.quantity = 0;
    this.description = '';
    this.discount = 0;
    this.categoryid = 0;
    this.selectedFile = null; // Reset the file input
  }
}