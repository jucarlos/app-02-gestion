import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [

    {
        path: 'home',
        component: HomeComponent
    },
    {
       path: 'clientes',
       loadChildren: () => import('./clientes/clientes.module').then( m => m.ClientesModule),
    },
    {
        path: 'temario',
        loadChildren: () => import('./temario/temario.module').then( m => m.TemarioModule)
    },
    {
        path: 'pipes',
        loadChildren: () => import('./pipes/pipes.module').then( m => m.PipesModule)
    
    },
    {
        path: 'paises',
        loadChildren: () => import('./paises/paises.module').then( m => m.PaisesModule)
    },
    {
        path: '**',
        redirectTo: 'home'   
    }

];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule ]
})
export class AppRoutingModule {}