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
import { ImageResponseComponent } from './image-response/image-response.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon'





@NgModule({
  declarations: [
    ImageUploaderComponent,
    WorkerSideComponent,
    TaskDisplayComponent,
    ImageResponseComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    SharedModule,
    MatCheckboxModule,
    MatRadioModule,
    FormsModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatCardModule,
    MatIconModule
    


  ]
})
export class DataModelingModule { }


