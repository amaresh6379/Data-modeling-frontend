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
  finalOptionReponse:any;
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
      this.responseData =  res;
      let max = 0;
       this.responseData.options.forEach((value:any)=>{
        let newValue  =  value?.submissions?.length;
        if(max < newValue){
          max  =  newValue;
        }
    })
    const finalOption  =  this.responseData.options.find((res:any)=>( res?.submissions?.length === max));
    
    this.finalOptionReponse = finalOption;
    console.log("this.finalOptionReponse",this.finalOptionReponse);
    
    
    


    
    

      
 
      

    })
  }

}
