import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from './services/dataService.service';



@NgModule({
  declarations: [
  ],
  imports: [
    FormsModule
  ],
  providers: [DataService],
  bootstrap: []
})
export class CoreModule { }
