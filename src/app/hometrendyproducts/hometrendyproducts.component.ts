import { RemovescrollService } from './../removescroll.service';
import { HomeProductsService } from './../home-products.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-hometrendyproducts',
  templateUrl: './hometrendyproducts.component.html',
  styleUrls: ['./hometrendyproducts.component.scss']
})
export class HometrendyproductsComponent implements OnInit, OnDestroy {
Subscribtion:Subscription= new Subscription();
trendyProducts:any[]=[];
showProductDetails = false;
selectedProduct: any;



  constructor(private _HomeProductsService:HomeProductsService, private _RemoveScrollService:RemovescrollService) { }
  showDetails(product: any) {
    this.selectedProduct = product;
    this.showProductDetails = true;
    this._RemoveScrollService.disableScroll();
  }
  closeDetails() {
    this.showProductDetails = false;
    this._RemoveScrollService.enableScroll();
  }

  ngOnInit(): void {
    this.Subscribtion = this._HomeProductsService.getTrendyProducts().subscribe({
      next:(response)=> this.trendyProducts=response.products,
      error:(error)=>console.log(error),
      complete:()=>console.log('complete', this.trendyProducts),
    })

  }
  ngOnDestroy(): void {
    this.Subscribtion.unsubscribe();
  }
}
