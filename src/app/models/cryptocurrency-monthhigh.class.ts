export class CryptomonthHigh{
    id: number;
    coin: string;
    created_at: Date;
    updated_at: Date;
    price_usd: number;
    price_btc: number;
    price_date: Date;

    constructor(data?: any){
        this.id = data.id;
        this.coin = data.coin;
        this.price_usd = +(Number(data.price_usd).toFixed(2));
        this.price_btc = +(Number(data.price_btc).toFixed(2));
        this.price_date = new Date(data.price_date);
    }
}