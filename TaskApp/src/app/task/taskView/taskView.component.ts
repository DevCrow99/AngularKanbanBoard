import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/services/dataService.service';
import { Task } from '../../model/task';
import { Router } from '@angular/router';

@Component({
  selector: 'task-view',
  templateUrl: './taskView.component.html',
  styleUrls: ['./taskView.component.css']
})
export class TaskViewComponent implements OnInit {
  taskData: Array<Task> = new Array<Task>();

  constructor(private _dataService: DataService, private _router: Router) {

  }

  ngOnInit() {
    this.getTasks();
  }

  navigateToClickedTask(taskId: number): void {
    this._router.navigate(["task", "selected", taskId]);
  }

  navigateToCreateTask(): void {
    this._router.navigate(["task", "create"]);
  }

  getTasks() {
    this._dataService.getTasks().subscribe(tasks => { this.taskData = tasks});
  }
}
