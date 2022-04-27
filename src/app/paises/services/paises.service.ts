import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/environments/environment';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {


  constructor(private http: HttpClient) { }

  getPaises(): Observable<Country[]> {

    const url = `${apiUrl}/all`;

    return this.http.get<Country[]>(url);
  }

}
