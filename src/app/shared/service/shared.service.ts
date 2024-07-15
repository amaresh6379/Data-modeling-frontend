import { Injectable } from "@angular/core";
import { DialogComponent } from "../dialog/dialog.component";
import {MatDialog} from '@angular/material/dialog';
import {HttpService} from './../../shared/service/http.service'

@Injectable({
    providedIn: 'root'
  })



export class sharedService{
    
    constructor(
        private dialog : MatDialog,
        private httpService: HttpService
    ){ }

    uploadDialog() {
        return this.dialog.open(DialogComponent,{
            height: '500px',
            width: '500px',
            disableClose: true
        });
    }
    connectToWallet(data:any){
        return this.httpService.postMethod('/user/wallet',{data});
    }


}
