import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeproductcategoryComponent } from './homeproductcategory.component';

describe('HomeproductcategoryComponent', () => {
  let component: HomeproductcategoryComponent;
  let fixture: ComponentFixture<HomeproductcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeproductcategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeproductcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
