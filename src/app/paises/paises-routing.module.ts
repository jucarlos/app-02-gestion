import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaisDetalleComponent } from './pages/pais-detalle/pais-detalle.component';
import { PaisesComponent } from './pages/paises/paises.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'listado',
        component: PaisesComponent
      },
      {
        path: 'verpais/:id',
        component: PaisDetalleComponent,
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
export class PaisesRoutingModule { }
