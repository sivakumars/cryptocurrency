import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../services/crypto.service';
import { MarketCapChange, CryptoMarketCap } from '../models/crypto-marketcap.class';

@Component({
  selector: 'app-totalmarketstats',
  templateUrl: './totalmarketstats.component.html',
  styleUrls: ['./totalmarketstats.component.css']
})
export class TotalmarketstatsComponent implements OnInit {

  public marketCap: number;
  public change: MarketCapChange;
  public volume24h: number;
  
  constructor(public cryptoMarketService: CryptoService){
    this.cryptoMarketData();
  }

  cryptoMarketData(){
    let marketCapObj : CryptoMarketCap;  
    this.cryptoMarketService.getCryptoMarketCap().subscribe((data: any) => {
       marketCapObj = new CryptoMarketCap(JSON.parse(JSON.stringify(data)));
       this.marketCap = marketCapObj.getMarketCap();
       this.change = marketCapObj.getChange();
       this.volume24h = marketCapObj.getVolume24hours();
    });
  }

  public ngOnInit(): void {    
  }

  public ngOnDestroy(): void {
  }

}
