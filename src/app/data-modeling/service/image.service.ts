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
  createOptionSubmission(data:any){
    return this.httpService.postMethod('/task/submission',data)
  }
  getTaskReport(id:number){
    return this.httpService.getMethod(`/task/${id}/report`)
  }
  getPreSignedUrl(data:any){
    return this.httpService.postMethod('/user/url',data);
  }
  getUserBalance(){
    return this.httpService.getMethod('/user/balance');
  }
  createOptions(data:any){
    return this.httpService.postMethod('/task/options',data)
  }
  createTask(data:any){
    return this.httpService.postMethod('/task',data)
  }
  getParticularUserTask(){
    return this.httpService.getMethod('/')
  }


}
