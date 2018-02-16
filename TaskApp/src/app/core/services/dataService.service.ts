import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Task } from 'app/model/task';
import { User } from 'app/model/user';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

@Injectable()
export class DataService {

  private backendUrlTasks = environment.url + 'tasks';
  private backendUrlUsers = environment.url + 'users';
  private headers = new Headers();

  constructor(private http: Http, private _dragularService: DragulaService) {
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');

    _dragularService.setOptions('fourth-bag', {
      revertOnSpill: true
    });

  }

  loggingFunction(data: any) {
    console.log('data received: ' + JSON.stringify(data));
  }

  // users
  createUser(user: User): Observable<User> {
    return this.http.post(`${this.backendUrlUsers}`, JSON.stringify(user), { headers: this.headers })
    .map(result => result.json());
  }

  getUsers(): Observable<User[]> {
    return this.http.get(this.backendUrlUsers)
      .map(result => result.json());
  }

  // users/{id}
  getUserById(id: number): Observable<User> {
    return this.http.get(`${this.backendUrlUsers}/${id}`)
      .map((response) => response.json());
  }

  //ResponseCode Observable
  deleteUser(id: number): Observable<Object>{
    return this.http.delete(`${this.backendUrlUsers}/${id}`)
      .map(response => response.json());
  }

  updateUser(user: User): Observable<User> {
    return this.http.post(`${this.backendUrlUsers}/${user.userid}`, JSON.stringify(user), { headers: this.headers })
      .map(result => result.json());
  }

  //////////////////////////////////////////////////////////////////////////////////////////

  createTask(task: Task): Observable<Task> {
    return this.http.post(`${this.backendUrlTasks}`, JSON.stringify(task), { headers: this.headers })
    .map(result => result.json());
  }

  getTasks(): Observable<Task[]> {
    return this.http.get(this.backendUrlTasks)
      .map(result => result.json());
  }

  getTaskById(id: number): Observable<Task> {
    return this.http.get(`${this.backendUrlTasks}/${id}`)
      .map(response => response.json());
  }

  deleteTask(id: number): Observable<Object>{
    return this.http.delete(`${this.backendUrlTasks}/${id}`)
      .map(response => response.json());
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.post(`${this.backendUrlTasks}/${task.taskid}`, JSON.stringify(task), { headers: this.headers })
      .map(result => result.json());
  }

  //////////////////////////////////////////////////////////////////////////////////////////

  updateTaskToDo(task: Task): Observable<Task>{
    return this.http.post(`${this.backendUrlTasks}/toDo/${task.taskid}`,JSON.stringify(task), { headers: this.headers})
    .map(result => result.json());
  }

  updateTaskProcessing(task: Task): Observable<Task>{
    return this.http.post(`${this.backendUrlTasks}/processing/${task.taskid}`,JSON.stringify(task), { headers: this.headers})
    .map(result => result.json());
  }

  updateTaskDone(task: Task): Observable<Task>{
    return this.http.post(`${this.backendUrlTasks}/done/${task.taskid}`,JSON.stringify(task), { headers: this.headers})
    .map(result => result.json());
  }

}
