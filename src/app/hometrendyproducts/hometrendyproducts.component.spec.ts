import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HometrendyproductsComponent } from './hometrendyproducts.component';

describe('HometrendyproductsComponent', () => {
  let component: HometrendyproductsComponent;
  let fixture: ComponentFixture<HometrendyproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HometrendyproductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HometrendyproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
