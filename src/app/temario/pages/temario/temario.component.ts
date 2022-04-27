import { Component, OnInit } from '@angular/core';
import { TEMARIO } from '../../data/data-temas';

import { Tema } from '../../interfaces/tema-interface';

@Component({
  selector: 'app-temario',
  templateUrl: './temario.component.html',
  styleUrls: ['./temario.component.css']
})
export class TemarioComponent implements OnInit {

  temario: Tema[] = [];


  constructor() { }

  ngOnInit(): void {
    this.temario = TEMARIO
    console.log( this.temario );
  }

  eventoDesdeElComponenteHijo( evento: number ) {
    console.log('Se ha producido un evento desde el componente hijo: ', evento );
  }

  
}
