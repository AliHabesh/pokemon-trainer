import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonCatalougeService } from './pokemon-catalouge.service';
import { UserService } from './user.service';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../models/pokemon.model';
import { User } from '../models/user.model';
const { apiKey, apiTrainersUrl } = environment;
@Injectable({
  providedIn: 'root',
})
export class CaptureService {
  constructor(
    private readonly userService: UserService,
    private readonly http: HttpClient,
    private readonly pokemonService: PokemonCatalougeService
  ) {}
  //Sends a Patch request to update the Pokemon list (adding a captured pokemon)
  public capturePokemon(pokemonId: string): void {
    if (!this.userService.user) {
      throw new Error('You cant capture pokemon, user not found!!');
    }

    const user: User = this.userService.user;

    const pokemon: string | undefined =
      this.pokemonService.pokemonById(pokemonId);

    user.pokemons.forEach((element) => {
      if (element === pokemon) {
        alert('You have already captured this pokemon!');
        return;
      } else {
        alert('Captured pokemon: ' + pokemon);
      }
    });

    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'x-api-key': apiKey,
    });

    if (pokemon) {
      user.pokemons.push(pokemon);
      this.http
        .patch(
          `${apiTrainersUrl}/${user.id}`,
          {
            pokemons: user.pokemons,
          },
          {
            headers,
          }
        )
        .subscribe((data) => {});
      this.userService.user = user;
    } else {
      alert('Pokemon is undefined in capture service');
    }
  }

  //Sends a Patch request to update the Pokemon list (removing a captured pokemon)
  public releasePokemon(pokemonName: string): void {
    if (!this.userService.user) {
      throw new Error('You cant release pokemon, user not found!!');
    }

    const user: User = this.userService.user;
    const index = user.pokemons.indexOf(pokemonName);
    if (index > -1) {
      user.pokemons.splice(index, 1);
    }

    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'x-api-key': apiKey,
    });
    this.http
      .patch(
        `${apiTrainersUrl}/${user.id}`,
        {
          pokemons: user.pokemons,
        },
        {
          headers,
        }
      )
      .subscribe((data) => {});
    this.userService.user = user;
  }
}
