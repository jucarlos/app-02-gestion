import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemarioComponent } from './pages/temario/temario.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'listado',
        component: TemarioComponent,

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
export class TemarioRoutingModule { }
