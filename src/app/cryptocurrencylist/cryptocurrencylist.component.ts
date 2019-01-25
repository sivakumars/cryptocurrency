import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../services/crypto.service';
import { CryptoCurrency } from '../models/cryptocurrency.class';

@Component({
  selector: 'app-cryptocurrencylist',
  templateUrl: './cryptocurrencylist.component.html',
  styleUrls: ['./cryptocurrencylist.component.css']
})
export class CryptocurrencylistComponent implements OnInit {

  public cryptoCurrencies : Array<CryptoCurrency>;
  public filteredCryptos: CryptoCurrency[];
  public sortFlags: any = {
    id: false,
    symbol: false,
    marketCap: true,
    price: false,
    volume24hChange: false
  };

  constructor(private cryptoCurrencyService: CryptoService) {
    console.log("cryptocurrency constructor");
     this.getTopFiftyCryptocurrencies();
  }

  ngOnInit() {
  }

  public getTopFiftyCryptocurrencies(){
    let cryptoCurrencyObject : any;
    this.cryptoCurrencyService.getCryptoCurrencies().subscribe((data: any) => {
       this.cryptoCurrencies = Object.keys(data).map((cryptoIndex) => {
          cryptoCurrencyObject = data[cryptoIndex];
          return new CryptoCurrency({
                key: cryptoIndex,
                ...cryptoCurrencyObject
          });
        });
        this.filteredCryptos = this.cryptoCurrencies;
      console.log(this.cryptoCurrencies);
    });
  }

  public sortString(sortFlag: boolean, columnName: string): void {
      
      this.filteredCryptos = this.filteredCryptos.sort((a, b) => {
          const symbolA = a[columnName].toUpperCase();
          const symbolB = b[columnName].toUpperCase();
          if (sortFlag) {
            return (symbolA < symbolB)? -1 : (symbolA == symbolB)? 0 : 1;
          }else{
            return (symbolA > symbolB)? -1 : (symbolA == symbolB)? 0 : 1;
          }
      });
     
      this.sortFlags[columnName] = !this.sortFlags[columnName];
  }

  sortNumbers(sortFlag: boolean, columnName:string){     
    let lValue;
    let rValue;
    this.filteredCryptos = this.filteredCryptos.sort((a:CryptoCurrency, b:CryptoCurrency) => {
      lValue = a[columnName];
      rValue = b[columnName];
      if(sortFlag){
      //ascending order    
        return ((typeof lValue != 'object' && typeof rValue != 'object') || (typeof lValue != 'undefined' && typeof rValue != 'undefined') )? 
                            a[columnName] - b[columnName] :  (+(lValue['hour'])) - (+(rValue['hour']));
      }else{
      //descending order
        return ((typeof lValue != 'object' && typeof rValue != 'object') || (typeof lValue != 'undefined' && typeof rValue != 'undefined') )? 
                            b[columnName] - a[columnName] : (+(rValue['hour'])) - (+(lValue['hour']));
      }
    });
    this.sortFlags[columnName] = !this.sortFlags[columnName];    
  }

  public listenFilterCryptos(e: CryptoCurrency[]): void {
    this.filteredCryptos = e;
  }

}
