import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IExchangeRate} from "../interfaces/interfaces";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  public getExchangeRates() {
    return this.httpClient.get<IExchangeRate[]>('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11');
  }
}
