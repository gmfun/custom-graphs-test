import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import Chart from 'frappe-charts/dist/frappe-charts.esm';
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
  constructor(private element: ElementRef) { }

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
    // data = {
    //   ...data,
    //   labels: ["12am-3am", "3am-6am", "6am-9am", "9am-12pm",
    //     "12pm-3pm", "3pm-6pm", "6pm-9pm", "9pm-12am"],
    //
    //   datasets: [
    //     {
    //       name: "Some Data", chartType: 'bar',
    //       values: [25, 40, 30, 35, 8, 52, 17, -4]
    //     },
    //     {
    //       name: "Another Set", chartType: 'bar',
    //       values: [25, 50, -10, 15, 18, 32, 27, 14]
    //     },
    //     {
    //       name: "Yet Another", chartType: 'line',
    //       values: [15, 20, -3, -15, 58, 12, -17, 37]
    //     }
    //   ],
    //   title: "My Awesome Chart",
    //   type: 'line', // or 'bar', 'line', 'pie', 'percentage'
    //   // height: 300,
    //   // colors: ['purple', '#ffa3ef', 'light-blue'],
    // }
    console.log(data);
    const chart = new Chart({
      parent: this.slot.nativeElement,
      data,
      height: 300,
      width: 400,
      title: this.data.title,
      type: this.data.type,
    });
    // this.randomize()
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
