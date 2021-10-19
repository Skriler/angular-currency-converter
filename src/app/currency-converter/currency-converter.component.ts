import {AfterViewInit, Component, OnInit} from '@angular/core';
import {HttpService} from "../shared/services/http.service";
import {ICurrency, IExchangeRate} from "../shared/interfaces/interfaces";

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss']
})
export class CurrencyConverterComponent implements OnInit {
  public exchangeRates: IExchangeRate[] = [];
  public exchangeCodes = new Map();
  public baseCurrency: ICurrency = {
    code: '',
    buy: 0,
    sale: 0,
  };
  public secondaryCurrency: ICurrency = {
    code: '',
    buy: 0,
    sale: 0,
  };

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getExchangeRates().subscribe((res: IExchangeRate[]) => {
      this.exchangeRates = res;
      this.fillExchangeCodes(this.exchangeRates);
    });
  }

  public fillExchangeCodes(data: any) {
    for (let rate of data) {
      let codes: string[] = [];

      if (this.exchangeCodes.has(rate.base_ccy))
        codes = this.exchangeCodes.get(rate.base_ccy);

      codes.push(rate.ccy);
      this.exchangeCodes.set(rate.base_ccy, codes);
    }
  }

  public getExchangeBaseCodes(){
    return Array.from(this.exchangeCodes.keys());
  }

  public calculateCurrency(requiredCurrency: string) {
    this.exchangeRates.forEach((item, index) => {
      if (this.secondaryCurrency.code === item.ccy && this.baseCurrency.code === item.base_ccy) {
        if (requiredCurrency === 'base') {
          this.baseCurrency.buy = this.secondaryCurrency.buy * item.buy;
          this.baseCurrency.sale = this.secondaryCurrency.buy * item.sale;
          this.secondaryCurrency.sale = this.secondaryCurrency.buy;
        }
        else {
          this.secondaryCurrency.buy = this.baseCurrency.buy / item.buy;
          this.secondaryCurrency.sale = this.baseCurrency.buy / item.sale;
          this.baseCurrency.sale = this.baseCurrency.buy;
        }
      }
    });
  }
}
