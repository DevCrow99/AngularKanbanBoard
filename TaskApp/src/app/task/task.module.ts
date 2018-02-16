import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule }	from '@angular/common';

import { TaskViewComponent } from './taskView/taskView.component';
import { SelectedTaskComponent } from './selectedTask/selectedTask.component';
import { CreateTaskComponent } from './createTask/createTask.component';

import { UIKitModule } from '../ui-kit/ui-kit.module';
import { DragulaModule } from 'ng2-dragula';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AlertModule } from 'ngx-bootstrap/alert';

@NgModule({
  declarations: [
    TaskViewComponent,
    SelectedTaskComponent,
    CreateTaskComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    UIKitModule,
    DragulaModule,
    BsDatepickerModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [],
  exports: [TaskViewComponent,SelectedTaskComponent,CreateTaskComponent]
})
export class TaskModule { }
