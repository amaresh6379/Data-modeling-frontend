import { Component,EventEmitter,input } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  imageSrc: any;
  imgUrl = new EventEmitter();
  file : any;

  constructor(){

  }
  imageDisplay(event:any){
    if(event.target.files && event.target.files[0]){
      const files = event.target.files[0];
      console.log("files",files);
      this.file = files;
      
      const reader = new FileReader();
      reader.onload = (event)=>{
        this.imageSrc = event.target?.result;
        console.log("this.imageSrc",this.imageSrc);
        

      }

      reader.readAsDataURL(files);
    }

  }
  imageUpload(){
    this.imgUrl.emit({url:this.imageSrc,file:this.file});
    
    
  }


}
