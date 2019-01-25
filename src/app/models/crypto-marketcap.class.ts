export interface MarketCapChange{
    twentyFourHour : number;
    oneHour: number;
    week; number;
}

export class CryptoMarketCap{    
    private marketCap: number;
    private change: MarketCapChange;
    private volume24h: number;
    
    constructor(marketCapData?: any){        
        this.marketCap = marketCapData["market_cap"];
        this.change = marketCapData["change"];
        this.volume24h = marketCapData["24h_volume"];
    }

    getMarketCap(){
        return this.marketCap;
    }

    getChange(){
        return this.change;
    }

    getVolume24hours(){
        return this.volume24h;
    }
}