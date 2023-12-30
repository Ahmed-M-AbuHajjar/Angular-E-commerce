import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeProductsService {
  selectedCategory: string = 'category';


  constructor(private _HttpClient:HttpClient) { }
  setSelectedCategory(category: string): void {
    this.selectedCategory = category;
  }

  getSelectedCategory(): string | undefined {
    return this.selectedCategory;
  }

  getTrendyProducts():Observable<any>{
    return this._HttpClient.get("https://dummyjson.com/products/category/womens-jewellery")
  }
  getProductsCategories():Observable<any>{
    return this._HttpClient.get("https://dummyjson.com/products/categories")
  }
  getShopProducts():Observable<any>{

    if (this.selectedCategory != 'category') {

      return this._HttpClient.get(`https://dummyjson.com/products/category/${this.selectedCategory}`);
    } else {

      return this._HttpClient.get(`https://dummyjson.com/products`);
    }
  }
}
