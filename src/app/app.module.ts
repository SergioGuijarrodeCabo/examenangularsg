import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CubosMarca } from './components/cubosmarca/cubosmarca.component';
import { MenuComponent } from './components/menu/menu.component';
import { CuboService } from './services/cuboservice';
import { appRoutingProviders, routing } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CubosDetalle } from './components/cubosdetalle/cubosdetalle.component';
import { Login } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { Registro } from './components/registro/registro.component';
import { Perfil } from './perfil/perfil.component';
import { Compras } from './components/compras/compras.component';
import { RealizarCompra } from './realizarcompra/realizarcompra.component';

@NgModule({
  declarations: [
    AppComponent, MenuComponent, CubosMarca, CubosDetalle, Login, Registro, Perfil, Compras, RealizarCompra
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule, FormsModule
  ],
  providers: [CuboService, appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
