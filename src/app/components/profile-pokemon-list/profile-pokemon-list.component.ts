import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonCatalougeService } from 'src/app/services/pokemon-catalouge.service';

@Component({
  selector: 'app-profile-pokemon-list',
  templateUrl: './profile-pokemon-list.component.html',
  styleUrls: ['./profile-pokemon-list.component.css'],
})
export class ProfilePokemonListComponent {
  constructor(private pokemonService: PokemonCatalougeService) {}
  @Input() pokemons: Pokemon[] = [];
}
