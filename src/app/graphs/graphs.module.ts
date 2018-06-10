import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphsComponent } from './graphs.component';
import {GridsterModule} from 'angular-gridster2';
import {GraphModule} from '../graph/graph.module';
import { TypeSelectorComponent } from '../type-selector/type-selector.component';
import { TypeTitleComponent } from '../type-title/type-title.component';
import { DataSelectorComponent } from '../data-selector/data-selector.component';
import { CustomizableGraphComponent } from '../customizable-graph/customizable-graph.component';

@NgModule({
  imports: [
    CommonModule,
    GridsterModule,
    GraphModule
  ],
  declarations: [GraphsComponent, TypeSelectorComponent, TypeTitleComponent, DataSelectorComponent, CustomizableGraphComponent],
  exports: [GraphsComponent]
})
export class GraphsModule { }
