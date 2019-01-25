import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CryptoCurrency } from '../models/cryptocurrency.class';

@Component({
  selector: 'app-cryptofilter',
  templateUrl: './cryptofilter.component.html',
  styleUrls: ['./cryptofilter.component.css']
})
export class CryptofilterComponent implements OnInit {

  @Input() public cryptos: CryptoCurrency[];
  @Output() public filteredCryptosEvent = new EventEmitter<CryptoCurrency[]>();

  public filteredCryptos: CryptoCurrency[] = [];
  public percentChange: string = 'All';

  constructor() { }

  ngOnInit() {
  }

  public filterCryptos(): void {
    this.percentChangeFilter();
    this.showOnlyFilter();
  }

  public filterEvent(): void {
    this.filteredCryptosEvent.emit(this.filteredCryptos);
}

  public showOnlyFilter(): void {
    this.filterEvent();
  }

  public percentChangeFilter(): void {
    this.filteredCryptos = this.cryptos.filter((crypto: CryptoCurrency) => {
        if (this.percentChange === 'Positive') {
            return crypto.change.hour >= 0;
        } else if (this.percentChange === 'Negative') {
            return crypto.change.hour < 0;
        }
        return crypto;
    });
  }

}
