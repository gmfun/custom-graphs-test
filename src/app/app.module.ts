import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {GridsterModule} from 'angular-gridster2';
import {GraphsModule} from './graphs/graphs.module';
import {GraphModule} from './graph/graph.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GridsterModule,
    GraphsModule,
    GraphModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
