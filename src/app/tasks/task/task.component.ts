import { Component, inject, Input } from '@angular/core';
import { Task } from './task.model';
import { DatePipe } from '@angular/common';
import { TaskService } from '../tasks.service';


@Component({
  selector: 'app-task',
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
@Input() task!:Task;
private taskService=inject(TaskService);

Oncomplete(){
  this.taskService.removeTask(this.task.id);
}
}
