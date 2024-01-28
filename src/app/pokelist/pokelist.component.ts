import { Component, OnInit } from '@angular/core';
import { PokemonservService } from '../pokemon-service.service.js';
import { Pokeinterface } from '../interface/pokeinterface.js';
import { pokeresult } from '../interface/pokeResult.js';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.css'],
})
export class PokelistComponent implements OnInit {
  pokemon: pokeresult[] = [];
  pokemonDetails: Pokeinterface[] = [];

  constructor(private PokemonservService: PokemonservService) {}

  ngOnInit() {
    this.PokemonservService.getPokemon().subscribe({
      next: (data) => {
        this.pokemon = data.results;
        console.log(this.pokemon);
        this.fetchPokemonDetails();
      },
      error: (error) => {
        console.error('Error fetching Pokemon:', error);
      },
    });
  }

  fetchPokemonDetails() {
    this.pokemon.forEach((poke) => {
      this.PokemonservService.getAllInfo(poke.url).subscribe({
        next: (details) => {
          this.pokemonDetails.push(details);
          console.log(details);
        },
        error: (error) => {
          console.error('Error fetching Pokemon details:', error);
        },
      });
    });
  }
}
