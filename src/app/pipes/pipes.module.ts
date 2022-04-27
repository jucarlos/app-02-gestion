import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesRoutingModule } from './pipes-routing.module';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { AvanzadosComponent } from './pages/avanzados/avanzados.component';
import { HomeComponent } from './pages/home/home.component';
import { AlrevesPipe } from './pipes/alreves.pipe';


@NgModule({
  declarations: [
    BasicosComponent,
    AvanzadosComponent,
    HomeComponent,
    AlrevesPipe
  ],
  exports: [ AlrevesPipe ],
  imports: [
    CommonModule,
    PipesRoutingModule
  ]
})
export class PipesModule { }
