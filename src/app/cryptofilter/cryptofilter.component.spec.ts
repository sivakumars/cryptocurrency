import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptofilterComponent } from './cryptofilter.component';

describe('CryptofilterComponent', () => {
  let component: CryptofilterComponent;
  let fixture: ComponentFixture<CryptofilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptofilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptofilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
