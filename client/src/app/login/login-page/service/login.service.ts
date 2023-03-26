import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UrlFormationService } from 'src/app/services/urlFormationService/url-formation.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 private systemUser=new BehaviorSubject<number>(null)
  constructor(private http:HttpClient,
    private urlFormationService:UrlFormationService) { }

  createPassword(systemUser:any)
  {
    return this.http.put<any>(this.urlFormationService.createPassword(),systemUser)
  }

  setSysUser(data:number){
     this.systemUser.next(data);
  }

  getSysUser(){
    return this.systemUser.asObservable();
  }

}
