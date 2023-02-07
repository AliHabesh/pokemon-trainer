import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonCatalougeService } from 'src/app/services/pokemon-catalouge.service';
import { ProfileService } from 'src/app/services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-pokemon-list',
  templateUrl: './profile-pokemon-list.component.html',
  styleUrls: ['./profile-pokemon-list.component.css'],
})
export class ProfilePokemonListComponent {
  constructor(
    private pokemonService: PokemonCatalougeService,
    private profileService: ProfileService,
    private router: Router
  ) {}

  //Once a user has pressed release, it will execute the ProfileService method which removes
  //a pokemon from the user list (captured)
  public releaseButton(name: any, id: any): void {
    this.profileService.releasePokemon(name);
  }

  @Input() pokemons: Pokemon[] = [];
}
