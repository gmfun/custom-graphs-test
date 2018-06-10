import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-data-selector',
  templateUrl: './data-selector.component.html',
  styleUrls: ['./data-selector.component.css']
})
export class DataSelectorComponent implements OnInit {
  @Input() datasets: any[];
  dataInputs: string[];
  @Output() changedatasets: EventEmitter<any[]> = new EventEmitter();
  @ViewChild('type') selecteddatasets: ElementRef;
  constructor() { }

  ngOnInit() {
    this.dataInputs = this.datasets.map(function (dataset) {
      return dataset.toString();
    });
  }
  ngOnChange() {
    this.dataInputs = this.datasets.filter((dataset) => !!dataset).map(function (dataset) {
      return dataset.toString();
    });
  }
  selectDataSet(dataset, i) {
    dataset = dataset.split(',');
    this.datasets[i] = [dataset[0], +dataset[1]];
    this.changedatasets.next(this.datasets);
  }
  addData(dataset) {
    dataset = dataset.split(',');
    this.datasets.push([dataset[0], +dataset[1]]);
    this.changedatasets.next(this.datasets);
  }
}
