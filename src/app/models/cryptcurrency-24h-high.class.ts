export class cryptoTwentyFourHourHigh{
    high: number;
    high_time: Date;
    low: number;
    low_time: Date;
    symbol: string;

    constructor(data: any){
        this.high = data.high;
        this.high_time = new Date(data.high_time);
        this.low = data.low;
        this.low_time = new Date(data.low_time);
        this.symbol = data.symbol;
    }
}