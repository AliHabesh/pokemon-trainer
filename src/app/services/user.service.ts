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

  set user(user: User | undefined) {
    StorageUtil.storageSave<User>(StorageKeys.User, user!);
    this._user = user;
  }

  public releasePokemonFromUserList(): void {}

  constructor() {
    this._user = StorageUtil.storageRead<User>(StorageKeys.User);
  }

  public captured(pokemonId: string): boolean {
    if (this._user) {
      return this.user?.pokemons.find(
        (pokemon: Pokemon) => pokemon.id === pokemonId
      );
    }
    return false;
  }
}
