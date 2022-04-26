import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesRoutingModule } from './pipes-routing.module';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { AvanzadosComponent } from './pages/avanzados/avanzados.component';


@NgModule({
  declarations: [
    BasicosComponent,
    AvanzadosComponent
  ],
  imports: [
    CommonModule,
    PipesRoutingModule
  ]
})
export class PipesModule { }
