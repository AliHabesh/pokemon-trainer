import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { CaptureService } from 'src/app/services/capture.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent {
  @Input() pokemons: Pokemon[] = [];
  //@Input() pokemonId: string = '';

  constructor(private readonly captureService: CaptureService) {}

  public sendApiRequest(pokemon: any): void {
    //send request
    this.captureService.capturePokemon(pokemon);
  }
}
