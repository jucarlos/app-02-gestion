import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemarioRoutingModule } from './temario-routing.module';
import { TemarioComponent } from './pages/temario/temario.component';


@NgModule({
  declarations: [
    TemarioComponent
  ],
  imports: [
    CommonModule,
    TemarioRoutingModule
  ]
})
export class TemarioModule { }
