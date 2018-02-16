import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { TaskViewComponent } from './task/taskView/taskView.component';
import { UserViewComponent } from './user/userView/userView.component';
import { SelectedUserComponent } from './user/selectedUser/selectedUser.component';
import { CreateUserComponent } from './user/createUser/createUser.component';
import { SelectedTaskComponent } from './task/selectedTask/selectedTask.component';
import { CreateTaskComponent } from './task/createTask/createTask.component';
import { KanbanViewComponent } from './kanban/kanbanView/kanbanView.component';

const appRoutes: Routes = [
  {
    path: 'tasks',
    component: TaskViewComponent
  },
  {
    path: 'users',
    component: UserViewComponent
  },
  {
    path: 'kanban',
    component: KanbanViewComponent
  },
  {
    path: 'user/selected/:userId',
    component: SelectedUserComponent
  },
  {
    path: 'user/create',
    component: CreateUserComponent
  },
  {
    path: 'task/selected/:taskId',
    component: SelectedTaskComponent
  },
  {
    path: 'task/create',
    component: CreateTaskComponent
  },
  {
    path: '**',
    redirectTo: '/tasks',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  }
];

export const routes = RouterModule.forRoot(appRoutes, { useHash: true });
