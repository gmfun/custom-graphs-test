import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AppComponent} from '../app.component';
import {GridsterConfig} from 'angular-gridster2';
import {DataFormat} from '../graph/graph.component';
import {GridsterItemComponentInterface} from 'angular-gridster2';


export interface GridsterItem {
  x?: number;
  y?: number;
  rows?: number;
  cols?: number;
  initCallback?: (item: GridsterItem, itemComponent: GridsterItemComponentInterface) => void;
  dragEnabled?: boolean;
  resizeEnabled?: boolean;
  compactEnabled?: boolean;
  maxItemRows?: number;
  minItemRows?: number;
  maxItemCols?: number;
  minItemCols?: number;
  minItemArea?: number;
  maxItemArea?: number;
  [propName: string]: any;
}
export interface Dashboard extends GridsterItem {
  graphData?: DataFormat;
}

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class GraphsComponent implements OnInit {

  options: GridsterConfig;
  dashboard: Array<Dashboard>;
  defaultData = {
    // cols: 2,
    cols: 1,
    row: 1,
    y: undefined,
    x: undefined
  };
  static eventStop(item) {
    console.log(item, 'stop');
  }

  static eventStart() {
    // this.dashboard.push({});
  }
  itemChange(item, itemComponent) {
    console.log('itemChanged', item, itemComponent);
  }

  itemResize(item, itemComponent) {
    console.log('itemResized', item, itemComponent);
  }

  ngOnInit() {
    this.options = {
      itemChangeCallback: this.itemChange.bind(this),
      itemResizeCallback: this.itemResize.bind(this),
      gridType: 'scrollVertical',
      // maxItemRows: 2,
      setGridSize: true,
      // fixedColWidth: 550,
      // fixedRowHeight: 340,
      compactEnabled: true,
      // resizeEnabled: true,
      draggable: {
        delayStart: 0,
        enabled: true,
        // draggable.dragHandleClass
        ignoreContent: true,
        dragHandleClass: 'drag-handler',
        stop: GraphsComponent.eventStop,
        start: GraphsComponent.eventStart,
        dropOverItems: false,
        // dropOverItemsCallback: DragComponent.overlapEvent,
      },
      resizable: {
        enabled: true
      }
    };
    this.dashboard = [
      {
        // cols: 2,
        // rows: 2,
        // y: 0,
        // x: 0,
        y: undefined,
        x: undefined,
        cols: undefined,
        rows: undefined,
        graphData: {
          type: 'line',
          data: [['A', 3], ['asd', 4]],
          title: 'First'
        }
        },
      {
        // cols: 2,
        // rows: 2,
        // y: 0,
        // x: 2,
        y: undefined,
        x: undefined,
        cols: undefined,
        rows: undefined,
        graphData: {
          title: 'Second',
          type: 'bar',
          data: [['A', 3], ['asd', 4]]
        }
      },
      this.defaultData
    ];
    // this.bumpPosition();
  }

  updateData(data, i) {
    const dashboard = [...this.dashboard];
    if (!this.dashboard[i].graphData) {
      dashboard.push({...this.defaultData});
      // this.bumpPosition();
    }
    dashboard[i] = {...data, cols: undefined,
      rows: undefined};
    console.log('i', i, dashboard);
    this.dashboard = dashboard;
    if (!this.dashboard[i].graphData) {
      this.dashboard.push(this.defaultData);
      // this.bumpPosition();
    }
    console.log('Dash', this.dashboard);
  }

  changedOptions() {
    this.options.api.optionsChanged();
  }



}
