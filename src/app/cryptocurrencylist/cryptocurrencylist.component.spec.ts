import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptocurrencylistComponent } from './cryptocurrencylist.component';

describe('CryptocurrencylistComponent', () => {
  let component: CryptocurrencylistComponent;
  let fixture: ComponentFixture<CryptocurrencylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptocurrencylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptocurrencylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
