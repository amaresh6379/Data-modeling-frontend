import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImageService } from '../service/image.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-worker-side',
  templateUrl: './worker-side.component.html',
  styleUrls: ['./worker-side.component.scss']
})

export class WorkerSideComponent {
  workerDetails: any = {
    imageDetails: null,
    urlArray:[]
  };
  imageTab = false;
  selectedValue = {};
  constructor(
    private imageService: ImageService,
    private cdr: ChangeDetectorRef
  ){

  }

  subscriptionObj: Subscription = new Subscription;

  ngOnInit(): void{
    this.subscriptionObj.add(this.imageService.getAllImages().subscribe((res: any) =>{
      this.workerDetails.imageDetails = res;
    }))
  }
  startTask(id: any){
    this.subscriptionObj.add(this.imageService.getParticularImage(id).subscribe((res:any)=>{
       this.workerDetails.urlArray = res.options.map((res: any) => res);
      this.imageTab = true;
    }))
  }
  saveSubmission(){
    console.log(this.selectedValue);
    
  }



  

}
