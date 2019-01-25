import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { CryptoMarketCap } from '../models/crypto-marketcap.class';
import { CryptoCurrency } from '../models/cryptocurrency.class';

@Injectable()
export class CryptoService {

  constructor(public http: HttpClient) {}

  public getCryptoMarketCap() : Observable<any>{
    return this.http.get('https://chasing-coins.com/api/v1/std/marketcap');
  }
  // TODO: CHANGE THE API URL to the environments for dev and prod switch
  public getCryptoCurrencies() : Observable<any>{
    return this.http.get('https://chasing-coins.com/api/v1/top-coins/50');
    //return this.http.get('http://localhost:3000/db');
  }

  public getCryptoAllHighLow(symbol: string) : Observable<any>{
    return this.http.get('https://chasing-coins.com/api/v1/std/highlow/'+symbol);
  }

  public getCryptoTwentyHourHighLow(symbol: string) : Observable<any>{
    return this.http.get('https://chasing-coins.com/api/v1/std/highlow_24h/'+symbol);
  }

  public getCryptocurrencyLogo(symbol: string) : Observable<Blob>{
    return this.http.get('https://chasing-coins.com/api/v1/std/logo/'+symbol, {responseType:'blob'});
  }
}
