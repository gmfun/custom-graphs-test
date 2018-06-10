import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizableGraphComponent } from './customizable-graph.component';

describe('CustomizableGraphComponent', () => {
  let component: CustomizableGraphComponent;
  let fixture: ComponentFixture<CustomizableGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizableGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizableGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
