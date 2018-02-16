import { Component, ViewChild } from '@angular/core';
import { DataService } from '../../core/services/dataService.service';
import { User } from '../../model/user';

@Component({
  selector: 'taskDropdown-component',
  templateUrl: './taskDropdown.component.html',
  styleUrls: ['./taskDropdown.component.css']
})
export class TaskDropdownComponent {

  userData: Array<User> = new Array<User>();

  constructor(private _dataService: DataService) {
    this.getUsers();
   }

  getUsers() {
    this._dataService.getUsers().subscribe(
      (result) => { this.userData = result }
    );
}

}
