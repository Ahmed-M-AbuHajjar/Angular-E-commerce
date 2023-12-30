import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ShopComponent } from './shop.component';
import { HomeProductsService } from '../home-products.service';
import { RemovescrollService } from '../removescroll.service';
import { of } from 'rxjs';

describe('ShopComponent', () => {
  let component: ShopComponent;
  let fixture: ComponentFixture<ShopComponent>;
  let homeProductsServiceSpy: jasmine.SpyObj<HomeProductsService>;
  let removeScrollServiceSpy: jasmine.SpyObj<RemovescrollService>;

  beforeEach(() => {
    homeProductsServiceSpy = jasmine.createSpyObj('HomeProductsService', ['getProductsCategories', 'getShopProducts', 'setSelectedCategory']);
    removeScrollServiceSpy = jasmine.createSpyObj('RemovescrollService', ['disableScroll', 'enableScroll']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ShopComponent],
      providers: [
        { provide: HomeProductsService, useValue: homeProductsServiceSpy },
        { provide: RemovescrollService, useValue: removeScrollServiceSpy },
      ],
    });

    fixture = TestBed.createComponent(ShopComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load products on initialization', () => {
    // Arrange
    const productsCategories = ['Category1', 'Category2'];
    const shopProducts = [{/* Mocked product data */}];
    homeProductsServiceSpy.getProductsCategories.and.returnValue(of(productsCategories));
    homeProductsServiceSpy.getShopProducts.and.returnValue(of({ products: shopProducts }));

    // Act
    fixture.detectChanges();

    // Assert
    expect(component.productsCategories).toEqual(productsCategories);
    expect(component.shopProducts).toEqual(shopProducts);
  });

  it('should load products on category change', () => {
    // Arrange
    const selectedCategory = 'Category1';
    const shopProducts = [{/* Mocked product data */}];
    homeProductsServiceSpy.getShopProducts.and.returnValue(of({ products: shopProducts }));

    // Act
    component.onCategoryChange({ target: { selectedIndex: 0, options: [{ value: selectedCategory }] } });

    // Assert
    expect(homeProductsServiceSpy.setSelectedCategory).toHaveBeenCalledWith(selectedCategory);
    expect(component.shopProducts).toEqual(shopProducts);
  });

  // Add more tests as needed

  afterEach(() => {
    fixture.destroy();
  });
});