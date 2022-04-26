import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ClienteDetalleComponent } from './pages/cliente-detalle/cliente-detalle.component';
import { HomeClientesComponent } from './pages/home-clientes/home-clientes.component';


@NgModule({
  declarations: [
    ClientesComponent,
    ClienteDetalleComponent,
    HomeClientesComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule
  ]
})
export class ClientesModule { }
