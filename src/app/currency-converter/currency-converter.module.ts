import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CurrencyConverterRoutingModule} from "./currency-converter-routing.module";
import {CurrencyConverterComponent} from "./currency-converter.component";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    CurrencyConverterComponent
  ],
  imports: [
    CommonModule,
    CurrencyConverterRoutingModule,
    FormsModule,
  ]
})
export class CurrencyConverterModule { }
