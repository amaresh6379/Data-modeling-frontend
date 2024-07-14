import { Component } from '@angular/core';
import { ImageService } from '../service/image.service';
import { ActivatedRoute } from '@angular/router';
// import { MatProgressBar } from '@angular/material/progress-bar';



@Component({
  selector: 'app-image-response',
  templateUrl: './image-response.component.html',
  styleUrls: ['./image-response.component.scss']
})
export class ImageResponseComponent {
  taskId :  any;
  responseData : any;
  constructor(
    private imageServivce : ImageService,
    private route : ActivatedRoute,
    // private progressBar: MatProgressBar
  ){

  }
  ngOnInit(){
    this.route.params.subscribe( params =>{
    this.taskId = +params['id'];  
    })
    this.imageServivce.getTaskReport(this.taskId).subscribe((res)=>{
      console.log("res",res);
      this.responseData =  res;
      
    })


  }



}
