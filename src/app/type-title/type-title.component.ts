import {Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-type-title',
  templateUrl: './type-title.component.html',
  styleUrls: ['./type-title.component.css']
})
export class TypeTitleComponent implements OnInit, OnChanges {
  @Input() title: string;
  @Output() changeTitle: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('title') selectedTitle: ElementRef;
  constructor() { }

  ngOnInit() {
    this.selectedTitle.nativeElement.value = this.title;
  }
  ngOnChanges() {
    this.selectedTitle.nativeElement.value = this.title;
  }
  onChange(title) {
    this.changeTitle.next(title);
  }

}
