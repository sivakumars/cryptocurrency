// Angular modules
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
//Third-party Modules
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ChartModule } from 'angular2-chartjs';
//Routing module
import { AppRoutingModule } from './app-routing.module';
//App-components, services
import { AppComponent } from './app.component';
import { CryptoService } from './services/crypto.service';
import { CryptocurrencylistComponent } from './cryptocurrencylist/cryptocurrencylist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CryptodetailsComponent } from './cryptodetails/cryptodetails.component';
import { CryptofilterComponent } from './cryptofilter/cryptofilter.component';
import { TotalmarketstatsComponent } from './totalmarketstats/totalmarketstats.component';

@NgModule({
  declarations: [
    AppComponent,
    CryptocurrencylistComponent,
    PageNotFoundComponent,
    CryptodetailsComponent,
    CryptofilterComponent,
    TotalmarketstatsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    ChartModule
  ],
  providers: [CryptoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
