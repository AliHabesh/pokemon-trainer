import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonCatalougeService } from 'src/app/services/pokemon-catalouge.service';

@Component({
  selector: 'app-pokemon-catalogue',
  templateUrl: './pokemon-catalogue.page.html',
  styleUrls: ['./pokemon-catalogue.page.css'],
})
export class PokemonCataloguePage implements OnInit {
  get pokemons(): Pokemon[] {
    return this.pokemonCatalougeService.pokemons;
  }

  get loading(): boolean {
    return this.pokemonCatalougeService.loading;
  }

  get error(): string {
    return this.pokemonCatalougeService.error;
  }
  constructor(
    private readonly pokemonCatalougeService: PokemonCatalougeService
  ) {}

  ngOnInit(): void {
    this.pokemonCatalougeService.findAllPokemons();
  }
}
