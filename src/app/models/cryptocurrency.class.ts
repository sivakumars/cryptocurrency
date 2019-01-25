export interface CryptoCurrencyChange {
    hour: number;
    day: number;
}

export class CryptoCurrency {   

    public id: number;
    public symbol: string;
    public marketCap: number;
    public change: CryptoCurrencyChange;
    public price: number;
    public coinheat: number;
    public url: string;

    constructor(cryptoCurrency?: any) {
        this.id = cryptoCurrency.key;
        this.symbol = cryptoCurrency.symbol;        
        this.marketCap = cryptoCurrency.cap;
        this.change = cryptoCurrency.change;
        this.price = Number(cryptoCurrency.price);
        this.coinheat = Number(cryptoCurrency.coinheat);
        this.url = cryptoCurrency.url;
    }

    // /**
    //  * Getter $id
    //  * @return {number}
    //  */
    // public get $id(): number {
    //     return this.id;
    // }

    // /**
    //  * Getter $symbol
    //  * @return {string}
    //  */
    // public get $symbol(): string {
    //     return this.symbol;
    // }

    // /**
    //  * Getter $change
    //  * @return {CryptoCurrencyChange}
    //  */
    // public get $change(): CryptoCurrencyChange {
    //     return this.change;
    // }

    // /**
    //  * Getter $price
    //  * @return {number}
    //  */
    // public get $price(): number {
    //     return this.price;
    // }

    // /**
    //  * Getter $coinheat
    //  * @return {number}
    //  */
    // public get $coinheat(): number {
    //     return this.coinheat;
    // }

    // /**
    //  * Getter $url
    //  * @return {string}
    //  */
    // public get $url(): string {
    //     return this.url;
    // }
}