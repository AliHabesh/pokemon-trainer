import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonCatalougeService } from 'src/app/services/pokemon-catalouge.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-pokemon-list',
  templateUrl: './profile-pokemon-list.component.html',
  styleUrls: ['./profile-pokemon-list.component.css'],
})
export class ProfilePokemonListComponent implements OnInit {
  constructor(
    private pokemonService: PokemonCatalougeService,
    private profileService: ProfileService
  ) {}

  public releaseButton(name: any, id: any): void {
    this.profileService.releasePokemon(name);
  }

  ngOnInit(): void {
    this.pokemonService.pokemons;
  }

  @Input() pokemons: Pokemon[] = [];
}
