import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeTitleComponent } from './type-title.component';

describe('TypeTitleComponent', () => {
  let component: TypeTitleComponent;
  let fixture: ComponentFixture<TypeTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
