import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/services/dataService.service';
import { Task } from '../../model/task';
import { User } from '../../model/user';
import { Router } from '@angular/router';

@Component({
    selector: 'user-view',
    templateUrl: './userView.component.html',
    styleUrls: ['./userView.component.css']
})
export class UserViewComponent implements OnInit {
    userData: Array<User> = new Array<User>();

    constructor(private _dataService: DataService,private _router: Router) {

    }

    ngOnInit() {
      this.getUsers();
    }

    navigateToClickedUser(userId: number): void {
      this._router.navigate(["user", "selected", userId]);
    }

    navigateToCreateUser(): void{
      this._router.navigate(["user", "create"]);
    }

    getUsers(){
      this._dataService.getUsers().subscribe(users => { this.userData = users});
    }
}
