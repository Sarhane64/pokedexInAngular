import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonservService } from '../pokemon-service.service.js';
import { Pokeinterface } from '../interface/pokeinterface.js';

@Component({
  selector: 'app-pokedeatil',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.css'],
})
export class PokedetailComponent implements OnInit {
  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';

  public pokemonList!: Pokeinterface;
  public apiError: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private PokemonservService: PokemonservService
  ) {}

  ngOnInit() {
    this.getPokemon();
  }

  calculate(test: number | null): number {
    if (test !== null) {
      return (test * 100) / 110;
    } else {
      return 0;
    }
  }

  private getPokemon() {
    const id = this.route.snapshot.params['id'];
    const pokemon = this.PokemonservService.getAllInfo(
      `${this.urlPokemon}/${id}`
    );

    pokemon.subscribe({
      next: (res: Pokeinterface) => {
        this.pokemonList = res;
      },
      error: (error: any) => {
        this.apiError = true;
        console.error(error);
      },
    });
  }
}
