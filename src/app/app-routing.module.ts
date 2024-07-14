import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageUploaderComponent } from './data-modeling/image-uploader/image-uploader.component';
import { WorkerSideComponent } from './data-modeling/worker-side/worker-side.component';
import { ImageResponseComponent } from './data-modeling/image-response/image-response.component';

const routes: Routes = [
  { path: '', redirectTo: '/image', pathMatch: 'full' },
  { path: 'image', component: ImageUploaderComponent },
  { path:'worker', component: WorkerSideComponent },
  { path: 'response/:id',component:ImageResponseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
