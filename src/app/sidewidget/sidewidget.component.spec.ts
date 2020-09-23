import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidewidgetComponent } from './sidewidget.component';

describe('SidewidgetComponent', () => {
  let component: SidewidgetComponent;
  let fixture: ComponentFixture<SidewidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidewidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidewidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
