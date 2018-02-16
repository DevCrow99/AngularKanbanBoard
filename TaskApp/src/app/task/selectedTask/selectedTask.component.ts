import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../core/services/dataService.service';
import { Task } from 'app/model/task';
import { User } from '../../model/user';

@Component({
  selector: 'task-select',
  templateUrl: '/selectedTask.component.html',
  styleUrls: ['./selectedTask.component.css']
})
export class SelectedTaskComponent implements OnInit {

  selectedTask = new Task();
  isEdit: boolean;
  editButtonText: string;
  glyphIcon: string;
  selectedUser: User;
  minDate: Date = new Date();

  userData: Array<User> = new Array<User>();

  currentDate: Date = new Date();
  bsValue: Date = new Date();

  constructor(private _dataService: DataService, private _route: ActivatedRoute, private _router: Router) {
  }

  ngOnInit() {
    this._route.params.subscribe(
      urlParameter => {
        let key = urlParameter['taskId'];
        this.getTaskById(key);
      });
    this._dataService.getUsers().subscribe((users) => {
      this.userData = users;
    });
    this.isEdit = false;
    this.editButtonText = "Bearbeiten";
    this.glyphIcon = "glyphicon glyphicon-pencil";
  }

  deleteSelectedTask() {
    this._dataService.deleteTask(this.selectedTask.taskid).subscribe(
      (result) => { this._router.navigate(["kanban"]) }
    );
  }

  getTaskById(id: number) {
    this._dataService.getTaskById(id).subscribe(
      (result) => { this.selectedTask = result }
    );
  }

  saveEditedTask(): void {

    this.selectedTask.endDate = this.bsValue.toLocaleDateString();

    this._dataService.getUserById(this.selectedUser.userid).subscribe((user) => {
      this.selectedTask.creator = user;
      this._dataService.updateTask(this.selectedTask).subscribe(
        (result) => { this.selectedTask = result }
      );
    });


  }

  onBack(): void {
    this._router.navigate(["kanban"]);
  }

  toggleButton(): void {
    this.isEdit = !this.isEdit;
    if (this.isEdit) {
      this.editButtonText = "Speichern";
      this.glyphIcon = "glyphicon glyphicon-floppy-disk";
    } else {
      this.editButtonText = "Bearbeiten";
      this.glyphIcon = "glyphicon glyphicon-pencil";
      this.saveEditedTask();
    }
  }

}
