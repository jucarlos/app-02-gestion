import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteDetalleComponent } from './pages/cliente-detalle/cliente-detalle.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { HomeClientesComponent } from './pages/home-clientes/home-clientes.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'listado',
        component: ClientesComponent
      },
      {
        path: 'vercliente',
        component: ClienteDetalleComponent
      },
      {
        path: '**',
        redirectTo: 'listado'
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
