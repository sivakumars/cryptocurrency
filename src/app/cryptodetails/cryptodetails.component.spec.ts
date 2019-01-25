import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptodetailsComponent } from './cryptodetails.component';

describe('CryptodetailsComponent', () => {
  let component: CryptodetailsComponent;
  let fixture: ComponentFixture<CryptodetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptodetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
