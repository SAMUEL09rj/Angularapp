import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTask } from './task/task.model';
import { TaskService } from './tasks.service';


@Component({
  selector: 'app-tasks',
  standalone:true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
  imports: [TaskComponent, NewTaskComponent]
})
export class TasksComponent {
  @Input({required:true}) userId!:string;
  @Input({required:true}) name!:string;
  isAddingTasks=false;
 
  constructor(private taskservice:TaskService){}
   
  get selectedUserTasks(){
   return this.taskservice.getUserTasks(this.userId);
  }



  OnStartTask(){
    this.isAddingTasks=true;
  }

  OnCloseTask(){
    this.isAddingTasks=false;
  }

  

}
