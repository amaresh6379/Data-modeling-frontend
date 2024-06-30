import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  imageSrc: any;

  constructor(){

  }
  imageDisplay(event:any){
    if(event.target.files && event.target.files[0]){
      const files = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (event)=>{
        this.imageSrc = event.target?.result;
      }

      reader.readAsDataURL(files);
    }

  }


}
