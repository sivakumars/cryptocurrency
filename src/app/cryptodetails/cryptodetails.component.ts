import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../services/crypto.service';
import { ActivatedRoute } from '@angular/router';
import { CryptoDetailsInterface } from '../models/CryptoDetailsInterface';
import { cryptoTwentyFourHourHigh } from '../models/cryptcurrency-24h-high.class';
import { CryptoAllTimeHigh } from '../models/cryptocurrency-ath.class';
import { CryptomonthHigh } from '../models/cryptocurrency-monthhigh.class';
import { CryptomonthLow } from '../models/cryptocurrency-monthlow.class';


@Component({
  selector: 'app-cryptodetails',
  templateUrl: './cryptodetails.component.html',
  styleUrls: ['./cryptodetails.component.css']
})
export class CryptodetailsComponent implements OnInit {
  
  symbol: string;
  allTimeHIgh : CryptoAllTimeHigh;
  monthHigh : CryptomonthHigh;
  monthLow : CryptomonthLow;
  twentyFourHighLow : cryptoTwentyFourHourHigh;
  type: string;
  data: any;
  options: any;
  cryptoLogo: any;
  isImageLoading: boolean;
  highPrice24h: number;
  lowPrice24h: number;

  constructor(private _cryptoDetailsService: CryptoService,
              private _route: ActivatedRoute) {        
                
  }

  ngOnInit() {
    this.symbol = this._route.snapshot.paramMap.get('symbol');
    this.getCryptoDataForMonth(this.symbol);
    this.getCryptoDateFor24Hours(this.symbol); 
    this.getCryptoCurrencyLogo(this.symbol);   
  }


  getCryptoDataForMonth(symbol: string) {
    this._cryptoDetailsService.getCryptoAllHighLow(symbol).subscribe((data)=>{
      this.allTimeHIgh = new CryptoAllTimeHigh(data['ath']);
      this.monthHigh = new CryptomonthHigh(data['month_high']);
      this.monthLow = new CryptomonthLow(data['month_low']); 

      this.type = 'line';
      this.data = {
        labels: [this.allTimeHIgh.price_date.toLocaleString(),
                 this.monthHigh.price_date.toLocaleString(),
                 this.monthLow.price_date.toLocaleString()],
        datasets: [
          {
            label: (this.symbol)+" (USD) ",
            data: [this.allTimeHIgh.price_usd, this.monthHigh.price_usd, this.monthLow.price_usd],
            backgroundColor: 'rgb(255, 99, 71)',
            borderColor: 'red',
            fontColor: 'white'           
          },
          {
            label: (this.symbol)+" (BTC) ",
            data: [this.allTimeHIgh.price_btc, this.monthHigh.price_btc, this.monthLow.price_btc],
            backgroundColor: 'light-green',
            borderColor: 'green'          
          }
        ]
      };
      this.options = {
        legend: {
            labels: {
                fontColor: 'white'
            }
        },
        scales: {
            xAxes: [{
              gridLines: {
                color: "rgba(255, 255, 255, 0.3)"
              },
              ticks: {
                fontColor:'white'
              }
            }],
            yAxes: [{
              gridLines: {
                color: "rgba(255, 255, 255, 0.3)",
              },
              ticks: {
                fontColor:'white'
              }
            }]
          },
          responsive: true,
          maintainAspectRatio: false
      };


    });
  }

  getCryptoDateFor24Hours(symbol: string) {
    this._cryptoDetailsService.getCryptoTwentyHourHighLow(symbol).subscribe((data) => {
      this.twentyFourHighLow = new cryptoTwentyFourHourHigh(data);
      this.highPrice24h = this.twentyFourHighLow.high;
      this.lowPrice24h = this.twentyFourHighLow.low;
    });
  }

  readImageFromBlob(image: Blob) {
    this.isImageLoading= true;
    console.log(image);
    let reader = new FileReader();
    reader.addEventListener("load", () => {
       this.cryptoLogo = reader.result;
       this.isImageLoading = false;
    }, false);
 
    if (image) {
      this.isImageLoading = false;
       reader.readAsDataURL(image);       
    }
  }

  getCryptoCurrencyLogo(symbol: string){
    this._cryptoDetailsService.getCryptocurrencyLogo(symbol).subscribe(data => {
      this.readImageFromBlob(data);
    });    
  }

  renderAllTimeChart(allTimeHigh:CryptoAllTimeHigh, monthHigh: CryptomonthHigh, monthLow: CryptomonthLow){
    
  }

}
