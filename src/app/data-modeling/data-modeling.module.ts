import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';
import { WorkerSideComponent } from './worker-side/worker-side.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { TaskDisplayComponent } from './task-display/task-display.component';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';





@NgModule({
  declarations: [
    ImageUploaderComponent,
    WorkerSideComponent,
    TaskDisplayComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    SharedModule,
    MatCheckboxModule,
    MatRadioModule,
    FormsModule,
    MatSnackBarModule

  ]
})
export class DataModelingModule { }


