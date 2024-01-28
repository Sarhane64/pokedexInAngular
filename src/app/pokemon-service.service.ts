import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { pokeresult } from './interface/pokeResult.js';
import { Pokeinterface } from './interface/pokeinterface.js';

@Injectable({
  providedIn: 'root',
})
export class PokemonservService {
  private readonly apiUrl: string =
    'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100';

  constructor(private http: HttpClient) {}

  getPokemon(): Observable<pokeresult> {
    return this.http.get<pokeresult>(this.apiUrl);
  }
  getAllInfo(url: string): Observable<Pokeinterface> {
    return this.http.get<Pokeinterface>(url);
  }
}
