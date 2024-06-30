import { Injectable } from "@angular/core";
import { DialogComponent } from "../dialog/dialog.component";
import {MatDialog} from '@angular/material/dialog';

@Injectable({
    providedIn: 'root'
  })


export class sharedService{
    constructor(
        private dialog : MatDialog
    ){ }

    uploadDialog() {
        return this.dialog.open(DialogComponent,{
            height: '500px',
            width: '500px',
            disableClose: true
        });
    

      }
}