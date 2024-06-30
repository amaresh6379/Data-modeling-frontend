import { Injectable } from '@angular/core';
import {HttpService} from './../../shared/service/http.service'


@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(
    private httpService : HttpService
  ) { }

  getAllImages(){
    return this.httpService.getMethod('/task/image');
  }
  getParticularImage(id:number){
    return this.httpService.getMethod(`/task/${id}/details`,{id:id})
  }

}
