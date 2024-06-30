import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageUploaderComponent } from './data-modeling/image-uploader/image-uploader.component';
import { WorkerSideComponent } from './data-modeling/worker-side/worker-side.component';

const routes: Routes = [
  { path: '', redirectTo: '/image', pathMatch: 'full' },
  { path: 'image', component: ImageUploaderComponent },
  { path:'worker', component: WorkerSideComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
