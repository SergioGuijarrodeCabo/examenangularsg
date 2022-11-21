import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CubosMarca } from './components/cubosmarca/cubosmarca.component';
import { MenuComponent } from './components/menu/menu.component';
import { CuboService } from './services/cuboservice';
import { appRoutingProviders, routing } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent, MenuComponent, CubosMarca
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule
  ],
  providers: [CuboService, appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
