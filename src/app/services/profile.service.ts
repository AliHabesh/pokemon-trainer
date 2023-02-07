import { APP_ID, Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Pokemon } from '../models/pokemon.model';

import { UserService } from './user.service';
import { PokemonCatalougeService } from './pokemon-catalouge.service';
import { LiteralExpr } from '@angular/compiler';
import { CaptureService } from './capture.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(
    private userService: UserService,
    private pokemonApi: PokemonCatalougeService,
    private captureService: CaptureService
  ) {}
  get user(): User | undefined {
    return this.userService.user;
  }

  get capturedPokemonList(): Pokemon[] {
    if (this.userService.user) {
      const array = this.filterThroughAndGenerateListOfPokemons(
        this.user?.pokemons
      );
      array.forEach((element) => {});
      return array;
    }
    return [];
  }

  public releasePokemon(name: string) {
    this.userService.user?.pokemons.forEach((element) => {
      console.log(element.name + 'hihih');
      if (element === name) {
        console.log(element.name + ' === ' + name + ' ?');
        this.captureService.releasePokemon(name);
      }
    });
  }

  //Generates a list of pokemons based on what the user have captured
  public filterThroughAndGenerateListOfPokemons(
    pokemonList: string[] | undefined
  ): Pokemon[] {
    if (!pokemonList) {
      return [];
    }
    let list: Pokemon[] = [];
    this.pokemonApi.pokemons.forEach((data) => {
      if (pokemonList.includes(data.name)) {
        list.push(data);
      }
    });
    list.forEach((element) => {});
    return list;
  }
}
