// shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DialogComponent, 
    NavbarComponent   
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
