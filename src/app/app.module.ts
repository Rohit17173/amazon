import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SellerComponent } from './seller/seller.component';
import { BuyerComponent } from './buyer/buyer.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from './admin/category/category.component';
import { ProductComponent } from './seller/product/product.component';
import { FindproductComponent } from './buyer/findproduct/findproduct.component';
import { CartprodcutComponent } from './buyer/cartprodcut/cartprodcut.component';
import { HistoryComponent } from './buyer/history/history.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';
import { SellerdetailsComponent } from './admin/sellerdetails/sellerdetails.component';
import { BuyerdetailsComponent } from './admin/buyerdetails/buyerdetails.component';
import { AddcategoryComponent } from './admin/addcategory/addcategory.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { SellernavbarComponent } from './seller/sellernavbar/sellernavbar.component';
import { AddproductComponent } from './seller/addproduct/addproduct.component';
import { SellersidebarComponent } from './seller/sellersidebar/sellersidebar.component';
import { SellerhomeComponent } from './seller/sellerhome/sellerhome.component';
import { BuyerNavbarComponent } from './buyer/buyer-navbar/buyer-navbar.component';
import { BuyerHomeComponent } from './buyer/buyer-home/buyer-home.component';
import { AddProdductComponent } from './seller/add-prodduct/add-prodduct.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SellerComponent,
    BuyerComponent,
    AdminComponent,
    CategoryComponent,
    ProductComponent,
    FindproductComponent,
    CartprodcutComponent,
    HistoryComponent,
    RegisterComponent,
    NavbarComponent,
    HomeComponent,
    AdminNavbarComponent,
    SellerdetailsComponent,
    BuyerdetailsComponent,
    AddcategoryComponent,
    AdminhomeComponent,
    SidebarComponent,
    SellernavbarComponent,
    AddproductComponent,
    SellersidebarComponent,
    SellerhomeComponent,
    BuyerNavbarComponent,
    BuyerHomeComponent,
    AddProdductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
