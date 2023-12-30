import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
apiUrl:string = 'https://jsonplaceholder.typicode.com/users'
  constructor(private _HttpClient:HttpClient) { }
  postRegisterForm(formData:FormGroup):Observable<any>{
    const postData = {
      first_name:formData.get('first_name')?.value,
      last_name:formData.get('last_name')?.value,
      user_name:formData.get('user_name')?.value,
      email:formData.get('email')?.value,
      password:formData.get('password')?.value
    };
    return this._HttpClient.post(this.apiUrl, postData)
  }
  postLoginForm(formData:FormGroup):Observable<any>{
    const postData = {
      email:formData.get('email')?.value,
      password:formData.get('password')?.value
    };
    return this._HttpClient.post(this.apiUrl, postData)
  };
  postForgotPasswordForm(formData:FormGroup):Observable<any>{
    const postData = {
      email:formData.get('email')?.value
    };
    return this._HttpClient.post('',postData)
  }
}
