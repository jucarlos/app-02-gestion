import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../../interfaces/pais.interface';
import { PaisesService } from '../../services/paises.service';


@Component({
  selector: 'app-pais-detalle',
  templateUrl: './pais-detalle.component.html',
  styleUrls: ['./pais-detalle.component.css']
})
export class PaisDetalleComponent implements OnInit {


  pais!: Country | undefined;

  constructor(private activatedRoute: ActivatedRoute,
              private paisService: PaisesService) {

    this.activatedRoute.params.subscribe( (resp: any) => {

      console.log( resp.id );
      
      this.paisService.getPaisPorAlpha( resp.id )
      .subscribe ( pais => {
        
        this.pais = pais;
        console.log( this.pais );
      });
      
    });


    console.log('El programa está continuando...');
  }

  ngOnInit(): void {
  }

}
