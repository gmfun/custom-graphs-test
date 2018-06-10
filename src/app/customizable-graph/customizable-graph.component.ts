import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Dashboard} from '../graphs/graphs.component';

@Component({
  selector: 'app-customizable-graph',
  templateUrl: './customizable-graph.component.html',
  styleUrls: ['./customizable-graph.component.css']
})
export class CustomizableGraphComponent implements OnInit, OnChanges {
  @Input() item: Dashboard;
  graphData;
  defaultData = {type: 'bar', data: [['A', 1], ['B', 3]], title: 'Fill title'};
  @Output() updateItem: EventEmitter<Dashboard> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.graphData = this.item.graphData || this.defaultData;
  }
  ngOnChanges() {
    this.graphData = this.item.graphData || this.defaultData;
  }
  changeType(type, i: number) {
    this.changeProp(type, 'type');
  }

  changeTitle(title, i) {
    this.changeProp(title, 'title');
  }

  changeProp(value, prop: string) {
    const current = this.graphData;
    if (this.validData(current, prop)) {
      this.graphData = {...current, [prop]: value};
      // this.update({...this.item, graphData: {...current, [prop]: value}});
    } else {
      alert('Wrong ' + prop);
    }
  }
  add() {
    this.update({...this.item, graphData: this.graphData});
  }
  update(data) {
    this.updateItem.next(data);
  }
  validData(data, type) {
    const condition = {
      title: {
        valid(item) {
          return !!item.title;
        }
      },
      type: {
        valid(item) {
          return !!item.type;
        }
      },
      data: {
        valid(item) {
          return item.data && item.length.data > 1;
        }
      }
    };
    return condition[type].valid(data);
  }

}
