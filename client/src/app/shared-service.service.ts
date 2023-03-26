import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  private loginShow =new BehaviorSubject<Boolean>(false)

  setLoginShow(data){
    this.loginShow.next(data)
  }
  getLoginShow(){
    return this.loginShow
  }

  constructor() { }
}
