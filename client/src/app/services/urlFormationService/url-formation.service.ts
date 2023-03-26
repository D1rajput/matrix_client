import { Injectable } from '@angular/core';
import { constants } from 'src/app/shared/static/constant';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlFormationService {


  appLoginUrl: string = environment.commonUrl;

  constructor() { }

 
  resetUser() {
    return `${this.appLoginUrl}/${constants.resetUser}`
  }
  resetToken() {
    return `${this.appLoginUrl}/${constants.resetToken}`
  }
  
 
  login() {
    return `${this.appLoginUrl}/${constants.login}`
  }
  resetPassword() {
    return `${this.appLoginUrl}/${constants.resetPassword}`
  }

  getSystemUsers() {
    return `${this.appLoginUrl}/${constants.getSystemUsers}`;
  }

  getDesignation() {
    return `${this.appLoginUrl}/${constants.getDesignation}`
  }
  postDesignation() {
    return `${this.appLoginUrl}/${constants.postDesignation}`
  }
  
  

  createPassword() {
    return `${this.appLoginUrl}/${constants.createPassword}`;
  }

  getAllUser() {
    return `${this.appLoginUrl}/${constants.allUser}`;
  }
 
 

 
 
  
  
  

}

