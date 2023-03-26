import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlFormationService } from 'src/app/services/urlFormationService/url-formation.service';
import { Designation } from '../model/designation';


@Injectable({
  providedIn: 'root'
})
export class DesignationService {
  constructor(private Http: HttpClient,
    private urlFormation: UrlFormationService) { }

  getDesignation(): Observable<Object> {
    return this.Http.get(this.urlFormation.getDesignation());
  }

  saveDesignation(desig: Designation): Observable<any> {
    return this.Http.post(this.urlFormation.postDesignation(), desig);
  }

  getManageUserData() : Observable<any>
  {
    return this.Http.get(this.urlFormation.getAllUser());
  }
}
