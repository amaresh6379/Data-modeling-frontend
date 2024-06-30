// shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    DialogComponent, 
    NavbarComponent   
  ],
  imports: [
    CommonModule,
    MatDialogModule,
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
