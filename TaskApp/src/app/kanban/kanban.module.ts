import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule }	from '@angular/common';

import { UIKitModule } from '../ui-kit/ui-kit.module';
import { DragulaModule } from 'ng2-dragula';
import { KanbanViewComponent } from './kanbanView/kanbanView.component';

@NgModule({
  declarations: [
    KanbanViewComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    UIKitModule,
    DragulaModule
  ],
  providers: [],
  bootstrap: [],
  exports: [KanbanViewComponent]
})
export class KanbanModule { }
