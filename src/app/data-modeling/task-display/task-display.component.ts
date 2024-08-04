import { Component } from '@angular/core';
import { ImageService } from '../service/image.service';

@Component({
  selector: 'app-task-display',
  templateUrl: './task-display.component.html',
  styleUrls: ['./task-display.component.scss']
})
export class TaskDisplayComponent {

  constructor(
    private ImageService:ImageService
  ){}

  ngOnInit(){
    this.ImageService.
  }

}
