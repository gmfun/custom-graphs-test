import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import {GridsterConfig, GridsterItem} from 'angular-gridster2';
import {DataFormat} from '../graph/graph.component';



interface Dashboard extends GridsterItem {
  graphData: DataFormat;
}

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent implements OnInit {

  options: GridsterConfig;
  dashboard: Array<Dashboard>;

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
    };

    this.dashboard = [
      {
        cols: 2,
        rows: 2,
        y: 0,
        x: 0,
        graphData: {
          type: 'line',
          data: [['A', 3], ['asd', 4]],
          title: 'First'
        }
        },
      {
        cols: 2,
        rows: 2,
        y: 0,
        x: 2,
        graphData: {
          title: 'Second',
          type: 'line',
          data: [['A', 3], ['asd', 4]]
        }
      }
    ];
  }

  changedOptions() {
    this.options.api.optionsChanged();
  }

  removeItem(item) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    // this.dashboard.push({});
  }

}
