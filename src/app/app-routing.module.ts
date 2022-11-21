import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CubosMarca } from './components/cubosmarca/cubosmarca.component';
import { ModuleWithProviders } from '@angular/core';
import { CubosDetalle } from './components/cubosdetalle/cubosdetalle.component';
import { Login } from './components/login/login.component';
import { Registro } from './components/registro/registro.component';
import { Perfil } from './perfil/perfil.component';
import { Compras } from './components/compras/compras.component';
import { RealizarCompra } from './realizarcompra/realizarcompra.component';
const routes: Routes = [

  {

    path: 'cubosmarca', component: CubosMarca
  },

  {
    path: 'cubosmarca/:marca', component: CubosMarca
  },

  {
    path: 'cubosdetalle/:idcubo', component: CubosDetalle
  },

  {
    path: 'login', component: Login
  },

  {
    path: 'registro', component: Registro
  },

  {
    path: 'perfil', component: Perfil
  },
  {
    path: 'compras', component: Compras
  },
  {
    path: 'realizarcompra', component: RealizarCompra
  }


];

export const appRoutingProviders: any[] = []
export const routing: ModuleWithProviders<any> = 
RouterModule.forRoot(routes);
