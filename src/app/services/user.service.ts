import { Injectable } from '@angular/core';
import { StorageKeys } from '../enums/storage-keys.enum';
import { Pokemon } from '../models/pokemon.model';
import { User } from '../models/user.model';
import { StorageUtil } from '../utils/storage.util';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _user?: User;

  get user(): User | undefined {
    return this._user;
  }
  //Sets a user in the SessionStorage
  set user(user: User | undefined) {
    StorageUtil.storageSave<User>(StorageKeys.User, user!);
    this._user = user;
  }

  constructor() {
    this._user = StorageUtil.storageRead<User>(StorageKeys.User);
  }

  //Checks if the pokemons has been captured, returns the boolean value
  public captured(pokemonId: string): boolean {
    if (this._user) {
      return this.user?.pokemons.find(
        (pokemon: Pokemon) => pokemon.id === pokemonId
      );
    }
    return false;
  }
}
