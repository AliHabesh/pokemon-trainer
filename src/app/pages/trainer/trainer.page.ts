import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { User } from 'src/app/models/user.model';
import { PokemonCatalougeService } from 'src/app/services/pokemon-catalouge.service';
import { ProfileService } from 'src/app/services/profile.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.page.html',
  styleUrls: ['./trainer.page.css'],
})
export class TrainerPage implements OnInit {
  //Retrieves a User, which contains all the info regarding the user
  get user(): User | undefined {
    return this.userService.user;
  }

  //Returns a list of captured pokemon for the specific user
  get capturedPokemons(): Pokemon[] {
    if (this.userService.user) {
      return this.profileService.capturedPokemonList;
    }
    return [];
  }

  constructor(
    private userService: UserService,
    private profileService: ProfileService,
    private pokemonService: PokemonCatalougeService
  ) {}

  //Retrieves all the pokemons on initialization
  ngOnInit(): void {
    this.pokemonService.findAllPokemons();
  }
}
