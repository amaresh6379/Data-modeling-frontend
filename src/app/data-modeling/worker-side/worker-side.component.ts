import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImageService } from '../service/image.service';
import { ChangeDetectorRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

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
  selectedValues: { [key: string]: any } = {};
  // private _snackBar: any;
  constructor(
    private imageService: ImageService,
    private cdr: ChangeDetectorRef,
    private _snackBar: MatSnackBar,
    private router: Router
  ){

  }

  subscriptionObj: Subscription = new Subscription;

  ngOnInit(): void{
    this.subscriptionObj.add(this.imageService.getAllImages().subscribe((res: any) =>{
      this.workerDetails.imageDetails = res;
    }));
    let data = {
      userId:2
    }
    this.subscriptionObj.add(this.imageService.getUserBalance(data))
  }
  startTask(id: any,isAdmin ?: any){
    this.subscriptionObj.add(this.imageService.getParticularImage(id).subscribe((res:any)=>{
       this.workerDetails.urlArray = res.options.map((res: any) => res);
      this.imageTab = true;
    }));
    if(isAdmin){
      this.router.navigate(['/response',id]);


    }
    
  }
  saveSubmission(){
    console.log(this.selectedValues);
    const data= {
      userId:2,
      optionsId:this.selectedValues
    }
    this.imageService.createOptionSubmission(data).subscribe((res:any)=>{
      if(res ){
        this._snackBar.open("You successfully completed the task", "ok");
        this.imageTab = false;
        
      }
      
    });
    
  }



  

}
