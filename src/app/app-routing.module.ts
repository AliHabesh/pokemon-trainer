import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './pages/login/login.page';
import { PokemonCataloguePage } from './pages/pokemon-catalogue/pokemon-catalogue.page';
import { TrainerPage } from './pages/trainer/trainer.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage,
  },
  {
    path: 'pokemon-catalouge',
    component: PokemonCataloguePage,
  },
  {
    path: 'trainer',
    component: TrainerPage,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //import a module
  exports: [RouterModule], // export a module
})
export class AppRoutingModule {}
