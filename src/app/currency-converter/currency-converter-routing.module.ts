import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CurrencyConverterComponent} from "./currency-converter.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: CurrencyConverterComponent
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class CurrencyConverterRoutingModule { }
