import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphComponent } from './graph.component';
import { ChartsModule } from 'ng2-charts';
import { ChartistModule } from 'ng-chartist';
@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    ChartistModule
  ],
  declarations: [GraphComponent],
  exports: [GraphComponent]
})
export class GraphModule { }
