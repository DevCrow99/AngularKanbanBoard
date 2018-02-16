import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/services/dataService.service';
import { User } from '../../model/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'user-select',
  templateUrl: './selectedUser.component.html',
  styleUrls: ['./selectedUser.component.css']
})
export class SelectedUserComponent implements OnInit {

  selectedUser = new User();
  isEdit: boolean;
  editButtonText: string;
  glyphIcon: string;

  constructor(private _dataService: DataService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe(
      urlParameter => {
        let key = urlParameter['userId'];
        this.getUserById(key);
      });

    this.isEdit = false;
    this.editButtonText = "Bearbeiten";
    this.glyphIcon = "glyphicon glyphicon-pencil";
  }

  deleteSelectedUser(){
    this._dataService.deleteUser(this.selectedUser.userid).subscribe(
      (result) => { this._router.navigate(["users"]) }
    );
  }

  getUserById(id: number) {
    this._dataService.getUserById(id).subscribe(
      (result) => { this.selectedUser = result }
    );
  }

  saveEditedUser(): void {
    this._dataService.updateUser(this.selectedUser).subscribe(
      (result) => { this.selectedUser = result }
    );
  }

  onBack(): void {
    this._router.navigate(["users"]);
  }

  toggleButton(): void {
    this.isEdit = !this.isEdit;
    if (this.isEdit) {
      this.editButtonText = "Speichern";
      this.glyphIcon = "glyphicon glyphicon-floppy-disk";
    } else {
      this.editButtonText = "Bearbeiten";
      this.glyphIcon = "glyphicon glyphicon-pencil";
      this.saveEditedUser();
    }
  }

}
