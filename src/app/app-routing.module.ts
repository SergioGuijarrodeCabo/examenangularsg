import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CubosMarca } from './components/cubosmarca/cubosmarca.component';
import { ModuleWithProviders } from '@angular/core';


const routes: Routes = [

  {

    path: 'cubosmarca', component: CubosMarca
  },

  {
    path: 'cubosmarca/:marca', component: CubosMarca
  }

];

export const appRoutingProviders: any[] = []
export const routing: ModuleWithProviders<any> = 
RouterModule.forRoot(routes);
