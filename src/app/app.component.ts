import { Component, Input } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';





@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 users=DUMMY_USERS;
 
 SelectedUserId?:string;

 get selectedUser(){
  return this.users.find((user)=>user.id ===this.SelectedUserId)!;
 }

 onSelectusers(id:string){
    this.SelectedUserId=id;
 }
}
