import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from '../authService/auth.service';
import { UrlFormationService } from '../urlFormationService/url-formation.service';

@Injectable({
  providedIn: 'root'
})
export class LogOutService {

  constructor(private http:HttpClient, private authService:AuthService,private urlFormationSerivce:UrlFormationService) { }
 
  baseURL = this.urlFormationSerivce.appLoginUrl;

  private logout = new BehaviorSubject<any>([]);

  public nav(sys_user_id: any): Observable<any> {
    // console.log(this.authService.getToken());
    
    return this.http.get(this.baseURL + "/module/" + sys_user_id);
  }

  logModal=false;
  public toogleModal(){
  return !this.logModal;
  }

  setLogout(logout: boolean){
    localStorage.setItem('logout', logout.toString())
  }
  getLogout(): any {
    return localStorage.getItem('logout')
  }

}
