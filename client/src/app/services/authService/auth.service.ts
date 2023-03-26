import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlFormationService } from '../urlFormationService/url-formation.service';

@Injectable({

  providedIn: 'root'

})

export class AuthService {

  constructor(private _http:HttpClient,private urlFormationService:UrlFormationService) { }

  loginUser(user: any){

    return this._http.post<any>(this.urlFormationService.login(),user)

  }

  getToken(){
    return localStorage.getItem('token')
  }

  getSystemUser(){
    return JSON.parse(localStorage.getItem('user1'))
  }

  resetPassword(email: any): Observable<any>{
    return this._http.get(this.urlFormationService.resetToken().concat("/").concat(email));
  }

  validateResetToken(token: any): Observable<any>{

    return this._http.post(this.urlFormationService.resetUser(),token);

  }



}