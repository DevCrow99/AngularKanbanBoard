import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/services/dataService.service';
import { User } from '../../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'user-create',
  templateUrl: './createUser.component.html',
  styleUrls: ['./createUser.component.css']
})
export class CreateUserComponent implements OnInit {

  newUser = new User();

  constructor(private _serviceData : DataService, private _router: Router ) { }

  ngOnInit():void {

  }

  onBack(): void {
    this._router.navigate(["users"]);
  }

  createUser(){
    this._serviceData.createUser(this.newUser).subscribe(
      (result) => { this._router.navigate(["users"]) }
    );
  }

}
