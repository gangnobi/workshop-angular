import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayTableComponent } from './display-table/display-table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DisplayTableComponent],
  exports: [DisplayTableComponent]
})
export class ComponentsModule { }
