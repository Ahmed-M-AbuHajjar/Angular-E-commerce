import { AuthService } from './../auth.service';
import { SharedService } from './../shared.service';
import { Component, OnInit,OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  Subscribtion:Subscription= new Subscription();
  constructor(private _sharedService:SharedService,private _authService:AuthService,private _router:Router){  }
  registerForm:FormGroup = new FormGroup({
    first_name:new FormControl(null,[Validators.maxLength(15),Validators.required]),
    last_name:new FormControl(null,[Validators.maxLength(30),Validators.required]),
    user_name:new FormControl(null,[Validators.maxLength(15),Validators.required]),
    email:new FormControl(null,[Validators.required,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/)])
  })
  onSubmit(){
    this.Subscribtion = this._authService.postRegisterForm(this.registerForm).subscribe({
      next: (response) => {
        console.log('Registration successful:', response);
        this._router.navigate(['/login']);      },
      error: (error) => console.log('Registration failed:', error),
      complete: () => console.log('Registration complete'),
    });
  }

  ngOnInit(): void {
    this._sharedService.setHideNavAndFooter(true);
  }

  ngOnDestroy(): void {
    this.Subscribtion.unsubscribe();
  }

}
