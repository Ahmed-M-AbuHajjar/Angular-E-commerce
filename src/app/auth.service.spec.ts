import { FormGroup, FormControl } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let httpClientTestingModule: HttpClientTestingModule;
  let httpTestingController: HttpTestingController
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[AuthService],
    });
    service = TestBed.inject(AuthService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });
  afterEach(()=>{
    httpTestingController.verify();
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should send a POST request for register form',()=>{
    const formData = new FormGroup({
      first_name: new FormControl('John'),
      last_name: new FormControl('Doe'),
      user_name: new FormControl('john_doe'),
      email: new FormControl('john@example.com'),
      password: new FormControl('password123'),
    });
    service.postRegisterForm(formData).subscribe();
    const req = httpTestingController.expectOne(service.apiUrl);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({
      first_name:'John',
      last_name:'Doe',
      user_name:'john_doe',
      email:'john@example.com',
      password:'password123',
    });
    req.flush({});
  });
  it('should send a POST request for login form', ()=>{
    const formData = new FormGroup({
      email: new FormControl('john@example.com'),
      password: new FormControl('password123'),
    });
    service.postLoginForm(formData).subscribe();
    const req = httpTestingController.expectOne(service.apiUrl);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({
      email:'john@example.com',
      password:'password123',
    });
    req.flush({});
    });
    it('should send a POST request for forgot password form', ()=>{
      const formData = new FormGroup({
        email: new FormControl('john@example.com'),
      });
      service.postForgotPasswordForm(formData).subscribe();
      const req = httpTestingController.expectOne('');
      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual({
        email:'john@example.com',
      });
      req.flush({});
    })

});
