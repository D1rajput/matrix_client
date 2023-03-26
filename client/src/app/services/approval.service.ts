import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlFormationService } from './urlFormationService/url-formation.service';

@Injectable({
  providedIn: 'root'
})
export class ApprovalService {

  constructor(private http:HttpClient,private url:UrlFormationService) { }

  approval(data):Observable<any>{
    return this.http.put(this.url.getApproval(), data);
  }
}
