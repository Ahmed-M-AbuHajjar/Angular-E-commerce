import { RemovescrollService } from './../removescroll.service';
import { Subscription } from 'rxjs';
import { HomeProductsService } from './../home-products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  categoriesSubscribtion:Subscription= new Subscription();
  productsSubscribtion:Subscription= new Subscription();
  shopProducts:any[]=[];
  productsCategories:any[]=[];
  showProductDetails = false;
  selectedProduct:any[] =[];
  selectedCategory:string ='category';
  selectedIndex:number = 0;
  constructor(private _HomeProductsService:HomeProductsService,  private _RemoveScrollService:RemovescrollService) { }

  showDetails(product: any):void {
    this.selectedProduct = product;
    this.showProductDetails = true;
    this._RemoveScrollService.disableScroll();
  }
  closeDetails():void {
    this.showProductDetails = false;
    this._RemoveScrollService.enableScroll();
  }
  loadProducts():void{
    this.productsSubscribtion = this._HomeProductsService.getShopProducts().subscribe({
      next:(response)=> this.shopProducts=response.products,
      error:(error)=>console.log(error),
      complete:()=>console.log('complete', this.shopProducts),
    })
  }
  onCategoryChange(event: any): void {
     this.selectedIndex = event.target.selectedIndex;
    this.selectedCategory = event.target.options[this.selectedIndex].value;
    this._HomeProductsService.setSelectedCategory(this.selectedCategory);
    this.loadProducts();

  }

  ngOnInit(): void {

    this.categoriesSubscribtion = this._HomeProductsService.getProductsCategories().subscribe({
      next:(response)=> this.productsCategories=response,
      error:(error)=>console.log(error),
      complete:()=>console.log('complete', this.productsCategories),
    })
    this.loadProducts();
  }
  ngOnDestroy(): void {
    this.categoriesSubscribtion.unsubscribe()
    this.productsSubscribtion.unsubscribe();
  }

}
