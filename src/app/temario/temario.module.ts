import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemarioRoutingModule } from './temario-routing.module';
import { TemarioComponent } from './pages/temario/temario.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';


@NgModule({
  declarations: [
    TemarioComponent,
    TarjetaComponent
  ],
  imports: [
    CommonModule,
    TemarioRoutingModule
  ]
})
export class TemarioModule { }
