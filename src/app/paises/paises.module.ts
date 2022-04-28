import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaisesRoutingModule } from './paises-routing.module';
import { PaisesComponent } from './pages/paises/paises.component';
import { PaisDetalleComponent } from './pages/pais-detalle/pais-detalle.component';


@NgModule({
  declarations: [
    PaisesComponent,
    PaisDetalleComponent
  ],
  imports: [
    CommonModule,
    PaisesRoutingModule
  ]
})
export class PaisesModule { }
