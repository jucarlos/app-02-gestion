import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  nombre: string = 'juan carlos';

  precio: number =  9523.48876;

  fecha: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
