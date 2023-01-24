import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class LiferayService {

  constructor(public httpClient:HttpClient) { }

  public async getUserData(username:string,password:string)
  {
    var prom = new Promise((resolve,reject)=>{
      var headers_object = new HttpHeaders();
      headers_object = headers_object.append('Content-Type', 'application/json');
      headers_object = headers_object.append("Authorization", "Basic " + btoa(`${username}:${password}`));
      console.log(JSON.stringify(headers_object));
      this.httpClient.get('/o/headless-admin-user/v1.0/my-user-account', {headers: headers_object}).subscribe(result=>{
        resolve(result);
      });
    });
    return prom;
  }
}
