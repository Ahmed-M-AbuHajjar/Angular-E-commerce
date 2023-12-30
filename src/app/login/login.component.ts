import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from './../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  Subscribtion:Subscription= new Subscription();
  constructor(private _authService:AuthService, private _router:Router) { }
  loginForm:FormGroup = new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/)])
  })
  onSubmit(){
    this.Subscribtion = this._authService.postLoginForm(this.loginForm).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
        this._router.navigate(['/home']);
      },
      error: (error) => console.log('login failed:', error),
      complete: () => console.log('login complete'),
    });
  }
  ngOnInit(): void {
  }

}
