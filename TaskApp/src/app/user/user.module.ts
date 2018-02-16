import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserViewComponent } from './userView/userView.component';
import { CommonModule }	from '@angular/common';
import { SelectedUserComponent } from './selectedUser/selectedUser.component';
import { CreateUserComponent } from './createUser/createUser.component';

@NgModule({
  declarations: [
    UserViewComponent,
    SelectedUserComponent,
    CreateUserComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [],
  exports: [UserViewComponent,SelectedUserComponent,CreateUserComponent]
})
export class UserModule { }
