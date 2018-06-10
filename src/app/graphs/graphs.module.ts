import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphsComponent } from './graphs.component';
import {GridsterModule} from 'angular-gridster2';
import {GraphModule} from '../graph/graph.module';

@NgModule({
  imports: [
    CommonModule,
    GridsterModule,
    GraphModule
  ],
  declarations: [GraphsComponent],
  exports: [GraphsComponent]
})
export class GraphsModule { }
