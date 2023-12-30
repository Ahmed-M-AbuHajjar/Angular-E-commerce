import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { PagesComponent } from './pages/pages.component';
import { BlogComponent } from './blog/blog.component';
import { ElementsComponent } from './elements/elements.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomesliderComponent } from './homeslider/homeslider.component';
import { HomeproductcategoryComponent } from './homeproductcategory/homeproductcategory.component';
import { HometrendyproductsComponent } from './hometrendyproducts/hometrendyproducts.component';
import { HomesubscribeComponent } from './homesubscribe/homesubscribe.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HeaderComponent } from './header/header.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ShopComponent,
    PagesComponent,
    BlogComponent,
    ElementsComponent,
    RegisterComponent,
    LoginComponent,
    HomesliderComponent,
    HomeproductcategoryComponent,
    HometrendyproductsComponent,
    HomesubscribeComponent,
    PagenotfoundComponent,
    HeaderComponent,
    ForgotpasswordComponent,
    ViewproductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
