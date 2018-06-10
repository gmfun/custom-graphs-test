import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation, Renderer2} from '@angular/core';
import Chart from 'frappe-charts/dist/frappe-charts.esm';
import {Renderer3} from '@angular/core/src/render3/interfaces/renderer';
import set = Reflect.set;
// const Chart = require('frappe-charts/dist/frappe-charts.min.cjs');

export interface DataFormat {
  type: string;
  title: string;
  data: [string | number, number][];
}
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class GraphComponent implements OnInit, AfterViewInit {
  @ViewChild('slot') slot: ElementRef;
  @Input() data: DataFormat;
  constructor(
    private element: ElementRef,
    private  renderer: Renderer2
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const {labels, datasets} = this.procData();
    let data = {
      labels,
      datasets,
      title: this.data.title,
      type: this.data.type,
      parent: this.element.nativeElement,
    };
    const chartData = {
      parent: this.slot.nativeElement,
      // parent: this.element.nativeElement,
      data,
      height: 200,
      title: this.data.title,
      type: this.data.type,
    }

    setTimeout(() => {

      this.setChart(chartData);

    }, 100);
  }

  setChart(data) {
    const chart = new Chart(data);
  }

  procData() {
    return this.data.data.reduce((acc, item) => {
      acc.labels.push(item[0]);
      acc.datasets[0].values.push(item[1]);
      return acc;
    }, {labels: [], datasets: [{
        name: this.data.title,
        chartType: this.data.type,
        values: []
      }]});
  }


}
