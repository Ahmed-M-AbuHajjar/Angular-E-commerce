import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HomeProductsService } from './home-products.service';

describe('HomeProductsService', () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let service: HomeProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[HomeProductsService],
    });
    injector = getTestBed();
    service = TestBed.inject(HomeProductsService);
    httpMock = injector.inject(HttpTestingController);
  });

  afterEach(()=>{
    httpMock.verify();
  })



  it('should return a list of trendy products', ()=>{
    const dummyProducts = [
      {id:1, name:'product 1'},
      {id:2, name:'product 2'},
    ];
    service.getTrendyProducts().subscribe((products)=>{
      expect(products).toEqual(dummyProducts);
    });

    const req = httpMock.expectOne('https://dummyjson.com/products/category/womens-jewellery');
    expect(req.request.method).toBe('GET');
    req.flush(dummyProducts);
  });
});

