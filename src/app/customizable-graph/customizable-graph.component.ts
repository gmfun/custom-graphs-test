import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Dashboard} from '../graphs/graphs.component';

@Component({
  selector: 'app-customizable-graph',
  templateUrl: './customizable-graph.component.html',
  styleUrls: ['./customizable-graph.component.css']
})
export class CustomizableGraphComponent implements OnInit {
  @Input() item: Dashboard;
  graphData;
  @Output() updateItem: EventEmitter<Dashboard> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  changeType(type, i: number) {
    this.changeProp(type, 'type');
  }

  changeTitle(title, i) {
    this.changeProp(title, 'title');
  }

  changeProp(value, prop: string) {
    const current = this.item;
    this.updateItem.next({...current, graphData: {...current.graphData, [prop]: value}});
  }

}
