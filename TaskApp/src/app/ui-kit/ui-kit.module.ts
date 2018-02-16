import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import * as moment from 'moment';
import 'moment/locale/de';

import { TabComponent } from './tab/tab.component';
import { CollapseComponent } from './collapse/collapse.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { PaginationComponent } from './paginaton/pagination.component';
import { TaskDropdownComponent } from './taskDropdown/taskDropdown.component';


import { TabsModule } from 'ngx-bootstrap';
import { BsDropdownModule} from 'ngx-bootstrap';
import { CollapseModule } from 'ngx-bootstrap';
import { DatepickerModule } from 'ngx-bootstrap';
import { PaginationModule } from 'ngx-bootstrap';
import { ButtonsModule } from 'ngx-bootstrap';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { UploadComponent } from './upload/upload.compoent';

@NgModule({
  declarations: [
    TabComponent,
    TaskDropdownComponent,
    CollapseComponent,
    PaginationComponent,
    DatepickerComponent,
    NavigationComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TabsModule.forRoot(),
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    DatepickerModule.forRoot(),
    PaginationModule.forRoot(),
    RouterModule
  ],
  providers: [],
  bootstrap: [],
  exports: [ NavigationComponent, TabComponent, TaskDropdownComponent, CollapseComponent, PaginationComponent, DatepickerComponent, UploadComponent ]
})
export class UIKitModule {
  ngOnInit(){
    moment.locale('de-de');
  }
 }
