import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiUrl = 'http://localhost:5000/v1'

  constructor(private httpService:HttpClient) {

   }
   postMethod(url:string,data:any){
    return this.httpService.post(this.apiUrl +url,data)

   }
   getMethod(url:string,data?:any){
    return this.httpService.get(this.apiUrl +url,data)

   }
   putMethod(url:string,data:any){
    return this.httpService.put(this.apiUrl +url,data)
   }
}
