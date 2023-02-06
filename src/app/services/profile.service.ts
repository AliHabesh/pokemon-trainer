import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Pokemon } from '../models/pokemon.model';

import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  get user(): User | undefined {
    return this.userService.user;
  }

  get capturedPokemonList(): Pokemon[] | undefined {
    if (this.userService.user) {
      return this.user?.pokemons;
    }
    return [];
  }

  constructor(private userService: UserService) {}
}
