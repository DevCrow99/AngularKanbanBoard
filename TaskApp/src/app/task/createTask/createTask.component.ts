import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../../model/task';
import { DataService } from '../../core/services/dataService.service';
import { User } from '../../model/user';
import { TaskDropdownComponent } from '../../ui-kit/taskDropdown/taskDropdown.component';

@Component({
  selector: 'task-create',
  templateUrl: './createTask.component.html',
  styleUrls: ['./createTask.component.css']
})
export class CreateTaskComponent implements OnInit {
  newTask: Task = new Task();
  bsValue: Date = new Date();
  currentDate: Date = new Date();
  selectedUser: User = new User();
  userData: Array<User> = new Array<User>();
  minDate: Date = new Date();

  constructor(private _serviceData: DataService, private _router: Router) { }

  ngOnInit(): void {
    this._serviceData.getUsers().subscribe((users) => {
      this.userData = users;
    });
  }

  onBack(): void {
    this._router.navigate(["kanban"]);
  }

  createTask() {

    this.newTask.startDate = this.currentDate.toLocaleDateString();
    this.newTask.endDate = this.bsValue.toLocaleDateString();

    this._serviceData.getUserById(this.selectedUser.userid).subscribe((user) => {
      this.newTask.creator = user;
      this._serviceData.createTask(this.newTask).subscribe((result) => {
        this.onBack();
      });
    });


  }


}

