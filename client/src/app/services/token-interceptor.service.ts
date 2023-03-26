import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './authService/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor
{
  constructor(private _injector:Injector){

  }
  intercept(
    req:  HttpRequest<any>,
    next: HttpHandler): Observable<HttpEvent<any>>{

   let authService= this._injector.get(AuthService)
    const token = authService.getToken()
    if(token != undefined || token!= null){
      let tokenizedReq = req.clone({
          headers: req.headers.set("Authorization", "Bearer ".concat(token)),            
      })
      return next.handle(tokenizedReq)
    }
    else{
      return next.handle(req);
    }
  }
}
