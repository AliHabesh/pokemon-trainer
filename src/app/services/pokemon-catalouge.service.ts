import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../models/pokemon.model';
const { apiPokemons, apiTrainersUrl } = environment;
@Injectable({
  providedIn: 'root',
})
export class PokemonCatalougeService {
  private _pokemons: Pokemon[] = [];
  private _error: string = '';
  private _loading: boolean = false;

  get pokemons(): Pokemon[] {
    return this._pokemons;
  }

  get error(): string {
    return this._error;
  }

  get loading(): boolean {
    return this._loading;
  }
  constructor(private readonly http: HttpClient) {}

  public findAllPokemons(): void {
    this.http
      .get<any>('https://pokeapi.co/api/v2/pokemon')
      .subscribe((data) => {
        data.results.forEach(
          (
            pokemon: {
              name: string;
              url: string;
              id: any;
              image: any;
              captured: boolean;
            },
            index: number
          ) => {
            pokemon.id = index + 1;
            this._pokemons.push(pokemon);
          }
        );
      });
  }

  public pokemonById(id: string): string | undefined {
    const poke = this._pokemons.find((pokemon: Pokemon) => pokemon.id === id);
    return poke?.name;
  }
}
