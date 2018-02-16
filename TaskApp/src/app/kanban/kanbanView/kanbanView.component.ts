import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../core/services/dataService.service';
import { Task } from '../../model/task';
import { Router } from '@angular/router';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'kanban-view',
  templateUrl: './kanbanView.component.html',
  styleUrls: ['./kanbanView.component.css']
})
export class KanbanViewComponent implements OnInit {
  taskData: Array<Task>;

  todoData: Array<Task>;
  processingData: Array<Task>;
  doneData: Array<Task>;

  toDoLength: number;
  processingLength: number;
  doneLength: number;

  taskid: number;

  constructor(private _dataService: DataService, private _router: Router, private _dragulaService: DragulaService) {

    this._dragulaService.drop.subscribe((value) => {

      let droppedElem = value[1];
      this.taskid = droppedElem.getAttribute('item-id');

      if(this.toDoLength < this.todoData.length){
        this._dataService.getTaskById(this.taskid).subscribe((task) => {
         this.updateToDoTask(task);
        });
      }

      if(this.processingLength < this.processingData.length){
        this._dataService.getTaskById(this.taskid).subscribe((task) => {
         this.updateProcessingTask(task);
        });
      }
      if(this.doneLength < this.doneData.length){
        this._dataService.getTaskById(this.taskid).subscribe((task) => {
          this.updateDoneTask(task);
        });
      }

      this.toDoLength = this.todoData.length;
      this.processingLength = this.processingData.length;
      this.doneLength = this.doneData.length;
    });

  }

  ngOnInit() {
    this.initVariables();
  }

  initVariables(){
    this.taskData = new Array<Task>();
    this.todoData = new Array<Task>();
    this.processingData = new Array<Task>();
    this.doneData = new Array<Task>();
    this.toDoLength = 0;
    this.processingLength = 0;
    this.doneLength = 0;
    this.initTasks();
  }

  initTasks() {
    this._dataService.getTasks().subscribe(tasks => {
      tasks.forEach(task => {
        if (task.statusid == 1) {
          this.todoData.push(task);
          this.toDoLength++;
        }
        if (task.statusid == 2) {
          this.processingData.push(task);
          this.processingLength++;
        }
        if (task.statusid == 3) {
          this.doneData.push(task);
          this.doneLength++;
        }
      });
    });
  }

  navigateToClickedTask(taskId: number): void {
    this._router.navigate(["task", "selected", taskId]);
  }

  navigateToCreateTask(): void {
    this._router.navigate(["task", "create"]);
  }

  updateToDoTask(task: Task) {
    this._dataService.updateTaskToDo(task).subscribe();
  }

  updateProcessingTask(task: Task) {
    this._dataService.updateTaskProcessing(task).subscribe();
  }

  updateDoneTask(task: Task) {
    this._dataService.updateTaskDone(task).subscribe();
  }

}
