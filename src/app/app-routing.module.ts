import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CryptocurrencylistComponent } from './cryptocurrencylist/cryptocurrencylist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CryptodetailsComponent } from './cryptodetails/cryptodetails.component';

const routes: Routes = [
  { path: '', component: CryptocurrencylistComponent },
  { path: 'cryptodetails/:symbol', component: CryptodetailsComponent },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }