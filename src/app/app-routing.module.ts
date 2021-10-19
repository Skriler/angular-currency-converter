import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: 'currency-converter',
    loadChildren: () => import('./currency-converter/currency-converter.module').then(m => m.CurrencyConverterModule)
  },
  {
    path: '',
    redirectTo: 'currency-converter',
    pathMatch: 'full'
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ]
})
export class AppRoutingModule { }
