import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-type-selector',
  templateUrl: './type-selector.component.html',
  styleUrls: ['./type-selector.component.css']
})
export class TypeSelectorComponent implements OnInit {
  @Input() type: string;
  @Output() changeType: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('type') selectedType: ElementRef;
  constructor() { }

  ngOnInit() {
    this.selectedType.nativeElement.value = this.type;
  }
  ngOnChange() {
    this.selectedType.nativeElement.value = this.type;
  }
  selectType(type) {
    console.log(type);
    this.changeType.next(type);
  }

}
