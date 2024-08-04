import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageUploaderComponent } from './data-modeling/image-uploader/image-uploader.component';
import { WorkerSideComponent } from './data-modeling/worker-side/worker-side.component';
import { ImageResponseComponent } from './data-modeling/image-response/image-response.component';
import { TaskDisplayComponent } from './data-modeling/task-display/task-display.component';

const routes: Routes = [
  { path: '', redirectTo: '/image', pathMatch: 'full' },
  { path: 'image', component: ImageUploaderComponent },
  { path:'worker', component: WorkerSideComponent },
  { path: 'response/:id',component:ImageResponseComponent},
  {path: 'response',component:TaskDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
