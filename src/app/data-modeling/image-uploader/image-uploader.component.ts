import { Component } from '@angular/core';  
import { sharedService } from 'src/app/shared/service/shared.service';


@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent {
  constructor(
    public sharedService: sharedService
  ){}
  UploadImage(){
    this.sharedService.uploadDialog();


  }

}
