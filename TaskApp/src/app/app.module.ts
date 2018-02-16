import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { TaskModule } from './task/task.module';
import { UserModule } from './user/user.module';
import { KanbanModule } from './kanban/kanban.module';
import { DragulaModule } from 'ng2-dragula';

import { routes} from './app.routes';
import { UIKitModule } from './ui-kit/ui-kit.module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
	  CoreModule,
    TaskModule,
    UserModule,
    UIKitModule,
    DragulaModule,
    routes,
    KanbanModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
 }
