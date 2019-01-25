import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalmarketstatsComponent } from './totalmarketstats.component';

describe('TotalmarketstatsComponent', () => {
  let component: TotalmarketstatsComponent;
  let fixture: ComponentFixture<TotalmarketstatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalmarketstatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalmarketstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
