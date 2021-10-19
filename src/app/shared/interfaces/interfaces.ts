export interface IExchangeRate {
  ccy: string;
  base_ccy: string;
  buy: number;
  sale: number;
}

export interface ICurrency {
  code: string;
  buy: number;
  sale: number;
}
